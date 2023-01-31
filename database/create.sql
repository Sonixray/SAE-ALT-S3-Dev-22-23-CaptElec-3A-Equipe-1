SET time_zone = "+01:00";

DROP TABLE IF EXISTS mqtt_stream_up_event;
DROP TABLE IF EXISTS mqtt_stream_status_event;
DROP TABLE IF EXISTS sensor;
DROP TABLE IF EXISTS location;

CREATE TABLE `location` (
  `name` varchar(50) NOT NULL,
  `floor` int DEFAULT NULL,
  `parentLocation` varchar(50) DEFAULT NULL
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `sensor` (
  `id` varchar(30) NOT NULL,
  `location` varchar(50) NOT NULL,
  `devEUI` char(16) NOT NULL
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `mqtt_stream_status_event` (
  `sensorId` varchar(30) NOT NULL,
  `dataDate` datetime NOT NULL,
  `batteryLevel` float NOT NULL
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `mqtt_stream_up_event` (
  `sensorId` varchar(30) NOT NULL,
  `dataDate` datetime NOT NULL,
  `humidity` float DEFAULT NULL,
  `co2` float DEFAULT NULL,
  `presence` int DEFAULT NULL,
  `temperature` float DEFAULT NULL,
  `luminosity` float DEFAULT NULL,
  `pressure` float DEFAULT NULL,
  `tvoc` float DEFAULT NULL
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


ALTER TABLE `location`
  ADD PRIMARY KEY (`name`);

ALTER TABLE `mqtt_stream_status_event`
  ADD PRIMARY KEY (`sensorId`,`dataDate`);

ALTER TABLE `mqtt_stream_up_event`
  ADD PRIMARY KEY (`sensorId`,`dataDate`);

ALTER TABLE `sensor`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `location`
  ADD CONSTRAINT `FK_location_parentLocation` FOREIGN KEY (`parentLocation`) REFERENCES `location` (`name`);

ALTER TABLE `mqtt_stream_status_event`
  ADD CONSTRAINT `FK_mqtt_stream_status_event_sensorId` FOREIGN KEY (`sensorId`) REFERENCES `sensor` (`id`);

ALTER TABLE `mqtt_stream_up_event`
  ADD CONSTRAINT `FK_mqtt_stream_up_event_sensorId` FOREIGN KEY (`sensorId`) REFERENCES `sensor` (`id`);

ALTER TABLE `sensor`
  ADD CONSTRAINT `FK_sensor_location` FOREIGN KEY (`location`) REFERENCES `location` (`name`);