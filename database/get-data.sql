SELECT *,
    (
    SELECT top 1 discount
    FROM table2 t2
    WHERE t2.date <= t1.date
        AND t2.id = t1.id
    ORDER BY t2.date DESC) AS discount
    FROM table1 t1;

SELECT *,
    (
    SELECT top 1 discount
    FROM table2
    WHERE table2.date <= t.date
    ORDER BY table2.date DESC) AS discount
    FROM table1 t;

SELECT A.*, B.batteryLevel
FROM mqtt_stream_up_event A, mqtt_stream_status_event B
ORDER BY ABS(TIMEDIFF(A.dataDate, CURRENT_DATE())) ASC

SELECT A.*, B.batteryLevel
FROM mqtt_stream_up_event A, mqtt_stream_status_event B
WHERE A.deviceId = B.deviceId
ORDER BY DATEDIFF(A.dataDate, NOW()) ASC

SELECT msue1.*, (SELECT batteryLevel from mqtt_stream_status_event msse where msse.sensorId = msue1.sensorId ORDER by dataDate DESC limit 1) as batteryLevel
from mqtt_stream_up_event msue1
where (msue1.sensorId, msue1.dataDate) = (SELECT sensorId , dataDate
    from mqtt_stream_up_event msue2
    where msue2.sensorId = msue1.sensorId
    and msue2.dataDate <= ?
    ORDER BY dataDate DESC
    LIMIT 1)