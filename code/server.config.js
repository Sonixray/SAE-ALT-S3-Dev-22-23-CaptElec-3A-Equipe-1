const sql = require('mysql');
const mqtt = require('mqtt');

const {
    name,
    version,
    author,
    license,
    description,
} = require('./package.json');

module.exports = {
    NAME: name,
    VERSION: version,
    AUTHOR: author,
    LICENSE: license,
    DESCRIPTION: description,
    PORT: process.env.PORT || 3000,
    SQL: {
        connect: sql.createPool,
        HOST: process.env.SQL_HOST,
        USER: process.env.SQL_USER,
        PASSWORD: process.env.SQL_PASSWORD,
        DATABASE: process.env.SQL_DATABASE,
    },
    MQTT: {
        connect: mqtt.connect,
        ENDPOINT: process.env.MQTT_ENDPOINT,
        TOPIC: process.env.MQTT_TOPIC,
    },
    AUTH: {
        SECRET: process.env.AUTH_SECRET_KEY,
        LOGINS: process.env.AUTH_LOGINS,
    },
};
