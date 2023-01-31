/* eslint-disable no-console */
const p = require('path');
const express = require('express');

const app = express();
const server = require('http').createServer(app);

const io = require('socket.io')(server);

const rateLimit = require('express-rate-limit');
const jwt = require('jsonwebtoken');

const {
    NAME,
    VERSION,
    AUTHOR,
    LICENSE,
    DESCRIPTION,
    PORT,
    SQL,
    MQTT,
    AUTH,
} = require('./server.config');

const sqlPool = SQL.connect({
    host: SQL.HOST,
    user: SQL.USER,
    password: SQL.PASSWORD,
    database: SQL.DATABASE,
});
console.log(`SQL | Connected to database '${SQL.DATABASE}'`);

const mqttClient = MQTT.connect(MQTT.ENDPOINT, {
    clean: true,
    connectTimeout: 4000,
    reconnectPeriod: 1000,
});

mqttClient.on('connect', () => {
    console.log(`MQTT | Connected to '${MQTT.ENDPOINT}'`);
    mqttClient.subscribe([MQTT.TOPIC], () => {
        console.log(`MQTT | Subscribed to '${MQTT.TOPIC}'`);
    });
});

mqttClient.on('message', (topic, payload) => {
    const data = JSON.parse(payload.toString());
    if (!data) return;

    const sensorId = data.deviceName;
    const dataDate = new Date();

    switch (topic.split('/').at(-1)) {
        case 'up': {
            const { co2, humidity, pressure, temperature, tvoc } = data.object;
            const presence = data.object.activity;
            const luminosity = data.object.illumination;
            console.log(
                sensorId,
                dataDate,
                humidity,
                co2,
                presence,
                temperature,
                luminosity,
                pressure,
                tvoc
            );
            io.emit('mqtt', {
                sensorId,
                humidity,
                co2,
                presence,
                temperature,
                luminosity,
                pressure,
                tvoc,
            });
            sqlPool.query(
                'INSERT INTO mqtt_stream_up_event (sensorId, dataDate, humidity, co2, presence, temperature, luminosity, pressure, tvoc) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [
                    sensorId,
                    dataDate,
                    humidity,
                    co2,
                    presence,
                    temperature,
                    luminosity,
                    pressure,
                    tvoc,
                ],
                (error) => {
                    if (error) throw error;
                }
            );
            break;
        }
        case 'status': {
            const { batteryLevel } = data;
            console.log(sensorId, dataDate, batteryLevel);
            io.emit('mqtt', {
                sensorId,
                batteryLevel,
            });
            const sqlQuery =
                'INSERT INTO mqtt_stream_status_event (sensorId, dataDate, batteryLevel) VALUES (?, ?, ?)';
            sqlPool.query(
                sqlQuery,
                [sensorId, dataDate, batteryLevel],
                (error) => {
                    if (error) throw error;
                }
            );
            break;
        }
        default:
            break;
    }
});

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 500, // Limit each IP to 500 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const authValidator = (req, res, next) => {
    const { authorization: token } = req.headers;
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
    return jwt.verify(token, AUTH.SECRET, (error, decoded) => {
        if (error || decoded !== AUTH.LOGINS)
            return res.status(500).json({ error: 'Une erreur est survenue' });
        return next();
    });
};

app.use(express.json());
app.use(express.static(p.join(__dirname, 'build')));

app.all('/api', apiLimiter, (req, res) => {
    res.json({ NAME, VERSION, AUTHOR, LICENSE, DESCRIPTION });
});

app.post('/api/auth', apiLimiter, (req, res) => {
    if (!req.body)
        return res.status(401).json({ error: 'Invalid credentials' });

    const { username, password } = req.body;
    if (`${username}:${password}` !== AUTH.LOGINS)
        return res.status(401).json({ error: 'Invalid credentials' });

    return jwt.sign(`${username}:${password}`, AUTH.SECRET, (error, token) => {
        if (error)
            return res.status(500).json({ error: 'Une erreur est survenue' });
        return res.json({ token });
    });
});

app.post('/api/verify-token', apiLimiter, (req, res) => {
    if (!req.body) return res.json({ valid: false });

    const { token } = req.body;
    if (!token) return res.json({ valid: false });

    return jwt.verify(token, AUTH.SECRET, (error, decoded) => {
        if (error || decoded !== AUTH.LOGINS)
            return res.status(500).json({ error: 'Une erreur est survenue' });
        return res.json({ valid: true });
    });
});

app.get('/api/get-data/date/:date', [apiLimiter, authValidator], (req, res) => {
    let { date } = req.params;
    if (date === '@latest') date = new Date();
    const sqlQuery = `SELECT S.location, msue1.*, (SELECT batteryLevel from mqtt_stream_status_event msse where msse.sensorId = msue1.sensorId ORDER by dataDate DESC limit 1) as batteryLevel
        from mqtt_stream_up_event msue1, sensor S
        where (msue1.sensorId, msue1.dataDate) = (SELECT sensorId , dataDate from mqtt_stream_up_event msue2 where msue2.sensorId = msue1.sensorId and msue2.dataDate <= ? ORDER BY dataDate DESC LIMIT 1)
        and S.id = msue1.sensorId`;
    sqlPool.query(sqlQuery, [date], (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

app.all('/*', (req, res) =>
    res.sendFile(p.join(__dirname, 'build', 'index.html'))
);

server.listen(PORT, () => {
    console.log(`WEB | App listening on port ${PORT}!`);
});
