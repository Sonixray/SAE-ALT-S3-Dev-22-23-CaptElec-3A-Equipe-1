INSERT INTO `location` (`name`, `floor`, `parentLocation`) VALUES
('Bâtiment A', NULL, NULL),
('Bâtiment B', NULL, NULL),
('Bâtiment C', NULL, NULL),
('Bâtiment D', NULL, NULL),
('Bâtiment E', NULL, NULL),
('Local-Velo', NULL, NULL),
('Amphi1', NULL, 'Bâtiment A'),
('B001', 0, 'Bâtiment B'),
('B002', 0, 'Bâtiment B'),
('B003', 0, 'Bâtiment B'),
('B101', 1, 'Bâtiment B'),
('B102', 1, 'Bâtiment B'),
('B103', 1, 'Bâtiment B'),
('B105', 1, 'Bâtiment B'),
('B106', 1, 'Bâtiment B'),
('B108', 1, 'Bâtiment B'),
('B109', 1, 'Bâtiment B'),
('B110', 1, 'Bâtiment B'),
('B111', 1, 'Bâtiment B'),
('B112', 1, 'Bâtiment B'),
('B113', 1, 'Bâtiment B'),
('B200X', 2, 'Bâtiment B'),
('B201', 2, 'Bâtiment B'),
('B202', 2, 'Bâtiment B'),
('B203', 2, 'Bâtiment B'),
('B212', 2, 'Bâtiment B'),
('B219', 2, 'Bâtiment B'),
('B2??', 2, 'Bâtiment B'),
('C004', 0, 'Bâtiment C'),
('C006', 0, 'Bâtiment C'),
('D001', 0, 'Bâtiment D'),
('E003', 0, 'Bâtiment E'),
('E004', 0, 'Bâtiment E'),
('E005', 0, 'Bâtiment E'),
('E006', 0, 'Bâtiment E'),
('E007', 0, 'Bâtiment E'),
('E100', 1, 'Bâtiment E'),
('E101', 1, 'Bâtiment E'),
('E102', 1, 'Bâtiment E'),
('E103', 1, 'Bâtiment E'),
('E104', 1, 'Bâtiment E'),
('E105', 1, 'Bâtiment E'),
('E106', 1, 'Bâtiment E'),
('E206', 2, 'Bâtiment E'),
('E207', 2, 'Bâtiment E'),
('E208', 2, 'Bâtiment E'),
('E209', 2, 'Bâtiment E'),
('E210', 2, 'Bâtiment E'),
('Foyers-Etudiants-1', NULL, 'Bâtiment B'),
('Foyers-Etudiants-2', NULL, 'Bâtiment B'),
('Foyers-Personnels', NULL, 'Bâtiment B'),
('Hall-1', NULL, 'Bâtiment A'),
('Hall-2', NULL, 'Bâtiment A'),
('Salle-conseil', NULL, 'Bâtiment A'),
('Serveurs', NULL, 'Bâtiment A');



INSERT INTO `sensor` (`id`, `location`, `devEUI`) VALUES
('AM107-10', 'B101', '24e124128c014516'),
('AM107-11', 'B102', '24e124128c016271'),
('AM107-12', 'B103', '24e124128c013339'),
('AM107-13', 'B105', '24e124128c011783'),
('AM107-14', 'B106', '24e124128c016684'),
('AM107-15', 'B108', '24e124128c012062'),
('AM107-16', 'B109', '24e124128c144603'),
('AM107-17', 'B112', '24e124128c012135'),
('AM107-18', 'B113', '24e124128c016453'),
('AM107-19', 'B212', '24e124128c014695'),
('AM107-2', 'B201', '24e124128c017943'),
('AM107-20', 'B2??', '24e124128c014727'),
('AM107-21', 'B219', '24e124128c017657'),
('AM107-22', 'B200x', '24e124128c016872'),
('AM107-23', 'C004', '24e124128c019441'),
('AM107-24', 'C006', '24e124128c015284'),
('AM107-25', 'D001', '24e124128c013244'),
('AM107-26', 'E003', '24e124128c017035'),
('AM107-27', 'E004', '24e124128c012886'),
('AM107-28', 'E005', '24e124128c010174'),
('AM107-29', 'E006', '24e124128c016509'),
('AM107-3', 'B202', '24e124128c011586'),
('AM107-30', 'E007', '24e124128c012980'),
('AM107-31', 'E101', '24e124128c016639'),
('AM107-32', 'E102', '24e124128c016122'),
('AM107-33', 'E103', '24e124128c019417'),
('AM107-34', 'E104', '24e124128c012114'),
('AM107-35', 'E105', '24e124128c010317'),
('AM107-36', 'E106', '24e124128c017317'),
('AM107-37', 'E100', '24e124128c019569'),
('AM107-38', 'E208', '24e124128c013070'),
('AM107-39', 'E209', '24e124128c011464'),
('AM107-4', 'B203', '24e124128c017412'),
('AM107-40', 'E206', '24e124128c010640'),
('AM107-41', 'E207', '24e124128c019775'),
('AM107-42', 'E210', '24e124128c016549'),
('AM107-43', 'Salle-conseil', '24e124128c016947'),
('AM107-44', 'Serveurs', '24e124128c010588'),
('AM107-45', 'Local-velo', '24e124128c016461'),
('AM107-46', 'Foyers-Personnels', '24e124128c019661'),
('AM107-47', 'Foyers-Etudiants-1', '24e124128c017952'),
('AM107-48', 'Foyers-Etudiants-2', '24e124128c010535'),
('AM107-49', 'Hall-1', '24e124128c017200'),
('AM107-5', 'B110', '24e124128c017760'),
('AM107-50', 'Hall-2', '24e124128c016491'),
('AM107-51', 'Amphi1', '24e124128c012168'),
('AM107-6', 'B111', '24e124128c011778'),
('AM107-7', 'B001', '24e124128c010091'),
('AM107-8', 'B002', '24e124128c012259'),
('AM107-9', 'B003', '24e124128c013816');



INSERT INTO `mqtt_stream_status_event` (`sensorId`, `dataDate`, `batteryLevel`) VALUES
('AM107-33', '2023-01-18 09:44:38', 100),
('AM107-32', '2023-01-18 09:45:38', 100),
('AM107-46', '2023-01-18 09:47:38', 100),
('AM107-49', '2023-01-18 09:48:08', 100),
('AM107-7', '2023-01-18 09:48:32', 48.82),
('AM107-39', '2023-01-18 09:48:38', 100),
('AM107-9', '2023-01-18 09:49:38', 74.8),
('AM107-13', '2023-01-18 09:49:38', 100),
('AM107-22', '2023-01-18 09:50:09', 100),
('AM107-51', '2023-01-18 09:50:38', 100),
('AM107-24', '2023-01-18 09:51:37', 100),
('AM107-8', '2023-01-18 09:54:09', 72.83),
('AM107-40', '2023-01-18 09:56:38', 100),
('AM107-43', '2023-01-18 09:57:09', 100),
('AM107-44', '2023-01-18 09:57:09', 100),
('AM107-42', '2023-01-18 09:57:09', 100),
('AM107-17', '2023-01-18 09:59:37', 100),
('AM107-15', '2023-01-18 09:59:38', 100),
('AM107-5', '2023-01-18 10:01:33', 42.91),
('AM107-25', '2023-01-18 10:02:09', 100),
('AM107-21', '2023-01-18 10:02:33', 100),
('AM107-26', '2023-01-18 10:02:37', 100),
('AM107-28', '2023-01-18 10:03:09', 100),
('AM107-34', '2023-01-18 10:03:09', 72.83),
('AM107-31', '2023-01-18 10:04:08', 100),
('AM107-37', '2023-01-18 10:05:09', 100),
('AM107-11', '2023-01-18 10:05:13', 100),
('AM107-10', '2023-01-18 10:05:38', 73.62),
('AM107-38', '2023-01-18 10:06:09', 100),
('AM107-45', '2023-01-18 10:07:38', 100),
('AM107-12', '2023-01-18 10:08:07', 100),
('AM107-48', '2023-01-18 10:08:09', 100),
('AM107-50', '2023-01-18 10:08:38', 100),
('AM107-14', '2023-01-18 10:09:09', 100),
('AM107-3', '2023-01-18 10:09:13', 50),
('AM107-18', '2023-01-18 10:10:09', 100),
('AM107-20', '2023-01-18 10:10:09', 100),
('AM107-19', '2023-01-18 10:10:10', 100),
('AM107-4', '2023-01-18 10:10:58', 46.85),
('AM107-23', '2023-01-18 10:11:09', 100),
('AM107-6', '2023-01-18 10:12:55', 45.67),
('AM107-29', '2023-01-18 10:13:38', 100),
('AM107-30', '2023-01-18 10:13:38', 100),
('AM107-35', '2023-01-18 10:14:09', 78.74),
('AM107-33', '2023-01-18 10:14:38', 100),
('AM107-32', '2023-01-18 10:15:38', 100),
('AM107-41', '2023-01-18 10:17:09', 100),
('AM107-47', '2023-01-18 10:17:37', 100),
('AM107-49', '2023-01-18 10:18:08', 100),
('AM107-7', '2023-01-18 10:18:32', 48.82),
('AM107-39', '2023-01-18 10:18:37', 100),
('AM107-13', '2023-01-18 10:19:38', 100),
('AM107-22', '2023-01-18 10:20:09', 100),
('AM107-51', '2023-01-18 10:20:38', 100),
('AM107-36', '2023-01-18 10:25:09', 100),
('AM107-40', '2023-01-18 10:26:38', 100),
('AM107-43', '2023-01-18 10:27:09', 100),
('AM107-44', '2023-01-18 10:27:10', 100),
('AM107-46', '2023-01-18 10:27:38', 100),
('AM107-17', '2023-01-18 10:29:38', 100),
('AM107-9', '2023-01-18 10:29:38', 74.8),
('AM107-15', '2023-01-18 10:29:38', 100),
('AM107-2', '2023-01-18 10:31:26', 45.67),
('AM107-5', '2023-01-18 10:31:33', 42.91),
('AM107-24', '2023-01-18 10:31:37', 100),
('AM107-25', '2023-01-18 10:32:09', 100),
('AM107-21', '2023-01-18 10:32:34', 100),
('AM107-26', '2023-01-18 10:32:37', 100),
('AM107-27', '2023-01-18 10:32:38', 100),
('AM107-28', '2023-01-18 10:33:09', 100),
('AM107-31', '2023-01-18 10:34:09', 100),
('AM107-37', '2023-01-18 10:35:09', 100),
('AM107-10', '2023-01-18 10:35:38', 75.98),
('AM107-38', '2023-01-18 10:36:09', 100),
('AM107-42', '2023-01-18 10:37:09', 100),
('AM107-48', '2023-01-18 10:38:09', 100),
('AM107-50', '2023-01-18 10:38:38', 100),
('AM107-14', '2023-01-18 10:39:09', 100),
('AM107-3', '2023-01-18 10:39:13', 48.82),
('AM107-18', '2023-01-18 10:40:09', 100),
('AM107-20', '2023-01-18 10:40:10', 100),
('AM107-4', '2023-01-18 10:40:58', 47.64),
('AM107-23', '2023-01-18 10:41:09', 100),
('AM107-6', '2023-01-18 10:42:55', 44.88),
('AM107-34', '2023-01-18 10:43:09', 72.83),
('AM107-29', '2023-01-18 10:43:38', 100),
('AM107-30', '2023-01-18 10:43:38', 100),
('AM107-35', '2023-01-18 10:44:09', 78.74),
('AM107-11', '2023-01-18 10:45:15', 100),
('AM107-22', '2023-01-18 10:50:08', 100),
('AM107-19', '2023-01-18 10:50:08', 100),
('AM107-51', '2023-01-18 10:50:37', 100),
('AM107-8', '2023-01-18 10:54:08', 72.83),
('AM107-33', '2023-01-18 10:54:37', 100),
('AM107-32', '2023-01-18 10:55:37', 100),
('AM107-40', '2023-01-18 10:56:37', 100),
('AM107-43', '2023-01-18 10:57:09', 100),
('AM107-46', '2023-01-18 10:57:37', 100),
('AM107-7', '2023-01-18 10:58:31', 48.82),
('AM107-13', '2023-01-18 10:59:37', 100),
('AM107-9', '2023-01-18 10:59:37', 74.8),
('AM107-15', '2023-01-18 10:59:38', 100),
('AM107-2', '2023-01-18 11:01:25', 45.67),
('AM107-24', '2023-01-18 11:01:37', 100),
('AM107-25', '2023-01-18 11:02:08', 100),
('AM107-21', '2023-01-18 11:02:33', 100),
('AM107-26', '2023-01-18 11:02:36', 100),
('AM107-27', '2023-01-18 11:02:37', 100),
('AM107-28', '2023-01-18 11:03:08', 100),
('AM107-31', '2023-01-18 11:04:08', 100),
('AM107-36', '2023-01-18 11:05:08', 100),
('AM107-37', '2023-01-18 11:05:09', 100),
('AM107-10', '2023-01-18 11:05:37', 75.98),
('AM107-44', '2023-01-18 11:07:08', 100),
('AM107-45', '2023-01-18 11:07:37', 100),
('AM107-48', '2023-01-18 11:08:08', 100),
('AM107-14', '2023-01-18 11:09:08', 100);



INSERT INTO `mqtt_stream_up_event` (`sensorId`, `dataDate`, `humidity`, `co2`, `presence`, `temperature`, `luminosity`, `pressure`, `tvoc`) VALUES
('AM107-32', '2023-01-18 09:45:38', 38, 462, 72, 19.3, 47, 981.4, 10),
('AM107-10', '2023-01-18 09:45:38', 34, 502, 127, 20.5, 98, 982, 124),
('AM107-38', '2023-01-18 09:46:08', 37.5, 504, 45, 19.2, 40, 982, 4),
('AM107-40', '2023-01-18 09:46:38', 39, 472, 74, 19.1, 25, 981.7, 101),
('AM107-41', '2023-01-18 09:47:09', 39, 481, 65, 19.1, 36, 982.3, 124),
('AM107-43', '2023-01-18 09:47:09', 38.5, 469, 64, 19.2, 60, 982, 131),
('AM107-44', '2023-01-18 09:47:10', 39, 494, 51, 19.1, 51, 981.7, 212),
('AM107-42', '2023-01-18 09:47:10', 39, 492, 75, 19.2, 38, 981.6, 199),
('AM107-46', '2023-01-18 09:47:38', 38.5, 484, 71, 19.1, 40, 981.9, 88),
('AM107-49', '2023-01-18 09:48:08', 38, 490, 43, 19.1, 55, 982.3, 61),
('AM107-12', '2023-01-18 09:48:08', 34.5, 535, 127, 20.7, 76, 982, 0),
('AM107-48', '2023-01-18 09:48:10', 38.5, 470, 45, 19.1, 55, 981.8, 155),
('AM107-7', '2023-01-18 09:48:32', 43.5, 505, 0, 18.4, 1, 982.1, 291),
('AM107-50', '2023-01-18 09:48:38', 38, 483, 36, 19.1, 40, 981.4, 38),
('AM107-39', '2023-01-18 09:48:38', 39, 479, 36, 19.2, 19, 982.1, 131),
('AM107-14', '2023-01-18 09:49:08', 37, 529, 31, 19.6, 141, 982, 109),
('AM107-3', '2023-01-18 09:49:12', 36.5, 442, 0, 18.2, 1, 981.9, 40),
('AM107-17', '2023-01-18 09:49:38', 37.5, 517, 7, 19.7, 140, 981.4, 141),
('AM107-9', '2023-01-18 09:49:38', 34, 508, 48, 20.7, 91, 982.2, 64),
('AM107-13', '2023-01-18 09:49:38', 37, 519, 2, 19.7, 155, 982.2, 43),
('AM107-15', '2023-01-18 09:49:38', 37.5, 831, 7, 19.7, 140, 981.7, 101),
('AM107-22', '2023-01-18 09:50:09', 37, 542, 6, 19.7, 99, 981.9, 42),
('AM107-20', '2023-01-18 09:50:09', 37, 487, 7, 19.7, 108, 981.8, 53),
('AM107-19', '2023-01-18 09:50:09', 37, 520, 4, 19.7, 112, 982.2, 64),
('AM107-18', '2023-01-18 09:50:09', 37.5, 508, 13, 19.7, 125, 981.3, 145),
('AM107-51', '2023-01-18 09:50:38', 38, 489, 7, 19.2, 45, 981.9, 36),
('AM107-4', '2023-01-18 09:50:58', 40, 1308, 127, 20.3, 42, 981.4, 142),
('AM107-23', '2023-01-18 09:51:09', 36.5, 523, 10, 19.7, 98, 982, 35),
('AM107-2', '2023-01-18 09:51:26', 40, 932, 127, 18.2, 6, 982.1, 134),
('AM107-5', '2023-01-18 09:51:33', 41.5, 1224, 28, 19.7, 21, 981.9, 122),
('AM107-24', '2023-01-18 09:51:37', 36.5, 542, 13, 19.7, 79, 982, 39),
('AM107-25', '2023-01-18 09:52:09', 38, 497, 9, 19.4, 25, 982.1, 14),
('AM107-21', '2023-01-18 09:52:34', 32.5, 570, 127, 22.1, 96, 982.3, 1),
('AM107-26', '2023-01-18 09:52:37', 38.5, 503, 2, 19.4, 32, 982.1, 6),
('AM107-27', '2023-01-18 09:52:38', 38.5, 501, 7, 19.3, 36, 982.4, 10),
('AM107-6', '2023-01-18 09:52:54', 40.5, 904, 0, 18.8, 9, 981.4, 258),
('AM107-16', '2023-01-18 09:53:09', 38, 607, 52, 19.7, 179, 981.6, 81),
('AM107-28', '2023-01-18 09:53:09', 38.5, 496, 24, 19.4, 90, 982.4, 8),
('AM107-11', '2023-01-18 09:53:09', 37.5, 496, 16, 19.3, 49, 982.3, 7),
('AM107-29', '2023-01-18 09:53:37', 38, 498, 27, 19.4, 73, 981.5, 5),
('AM107-30', '2023-01-18 09:53:37', 38, 502, 34, 19.3, 60, 982.5, 7),
('AM107-35', '2023-01-18 09:54:09', 38, 487, 54, 19.2, 49, 982, 10),
('AM107-31', '2023-01-18 09:54:09', 37.5, 496, 51, 19.3, 93, 982, 5),
('AM107-8', '2023-01-18 09:54:09', 34.5, 517, 127, 20.7, 87, 981.8, 37),
('AM107-33', '2023-01-18 09:54:38', 38, 515, 46, 19.2, 45, 982.4, 7),
('AM107-37', '2023-01-18 09:55:09', 37.5, 515, 47, 19.3, 45, 982.4, 6),
('AM107-32', '2023-01-18 09:55:38', 37.5, 464, 55, 19.3, 64, 981.6, 8),
('AM107-10', '2023-01-18 09:55:38', 33.5, 500, 127, 20.8, 100, 982.2, 130),
('AM107-38', '2023-01-18 09:56:09', 37.5, 511, 62, 19.2, 43, 982.2, 9),
('AM107-40', '2023-01-18 09:56:38', 39.5, 476, 61, 19.1, 28, 981.9, 109),
('AM107-41', '2023-01-18 09:57:08', 39, 486, 81, 19.1, 40, 982.5, 135),
('AM107-43', '2023-01-18 09:57:09', 39, 479, 102, 19.2, 75, 982.2, 140),
('AM107-44', '2023-01-18 09:57:09', 39, 502, 106, 19.2, 67, 981.9, 218),
('AM107-42', '2023-01-18 09:57:09', 39.5, 496, 89, 19.2, 43, 981.8, 214),
('AM107-47', '2023-01-18 09:57:37', 38, 505, 116, 19.1, 81, 982.3, 181),
('AM107-46', '2023-01-18 09:57:37', 38.5, 490, 106, 19.1, 49, 982.1, 90),
('AM107-45', '2023-01-18 09:57:38', 38.5, 499, 119, 19.2, 84, 982.2, 194),
('AM107-49', '2023-01-18 09:58:09', 38, 499, 127, 19.2, 69, 982.5, 64),
('AM107-12', '2023-01-18 09:58:09', 34, 527, 127, 20.9, 89, 982.2, 0),
('AM107-48', '2023-01-18 09:58:09', 38.5, 476, 127, 19.1, 71, 982, 159),
('AM107-7', '2023-01-18 09:58:32', 43.5, 503, 0, 18.5, 1, 982.3, 291),
('AM107-39', '2023-01-18 09:58:38', 39, 482, 127, 19.2, 21, 982.3, 140),
('AM107-50', '2023-01-18 09:58:38', 38, 495, 127, 19.2, 47, 981.6, 42),
('AM107-14', '2023-01-18 09:59:09', 37, 537, 127, 19.7, 162, 982.2, 106),
('AM107-3', '2023-01-18 09:59:13', 36.5, 435, 0, 18.2, 1, 982.1, 38),
('AM107-17', '2023-01-18 09:59:37', 37.5, 517, 127, 19.7, 171, 981.6, 150),
('AM107-9', '2023-01-18 09:59:38', 34, 554, 127, 20.8, 96, 982.4, 69),
('AM107-13', '2023-01-18 09:59:38', 37, 524, 127, 19.7, 171, 982.4, 43),
('AM107-15', '2023-01-18 09:59:38', 37.5, 835, 127, 19.7, 162, 981.9, 102),
('AM107-18', '2023-01-18 10:00:15', 37, 514, 127, 19.8, 151, 981.5, 131),
('AM107-22', '2023-01-18 10:00:15', 37, 546, 127, 19.7, 123, 982.1, 36),
('AM107-20', '2023-01-18 10:00:15', 37, 488, 127, 19.7, 138, 982, 48),
('AM107-19', '2023-01-18 10:00:15', 37, 529, 127, 19.7, 140, 982.4, 55),
('AM107-51', '2023-01-18 10:00:38', 38, 502, 127, 19.2, 47, 982.1, 37),
('AM107-4', '2023-01-18 10:01:03', 40, 1337, 127, 20.4, 38, 981.6, 144),
('AM107-23', '2023-01-18 10:01:09', 36.5, 522, 127, 19.7, 114, 982.2, 29),
('AM107-2', '2023-01-18 10:01:26', 41, 1079, 61, 18.3, 2, 982.3, 180),
('AM107-5', '2023-01-18 10:01:33', 41.5, 1246, 26, 19.8, 24, 982.1, 122),
('AM107-24', '2023-01-18 10:01:37', 36.5, 545, 127, 19.8, 95, 982.2, 30),
('AM107-25', '2023-01-18 10:02:09', 38, 505, 127, 19.4, 25, 982.4, 11),
('AM107-21', '2023-01-18 10:02:33', 34, 747, 127, 21.9, 83, 982.5, 2),
('AM107-26', '2023-01-18 10:02:37', 38, 519, 127, 19.4, 34, 982.3, 6),
('AM107-27', '2023-01-18 10:02:38', 38, 514, 127, 19.3, 45, 982.7, 10),
('AM107-6', '2023-01-18 10:02:55', 40.5, 906, 0, 18.9, 11, 981.6, 258),
('AM107-16', '2023-01-18 10:03:08', 38, 609, 127, 19.7, 214, 981.8, 81),
('AM107-28', '2023-01-18 10:03:09', 38, 507, 127, 19.5, 103, 982.6, 9),
('AM107-34', '2023-01-18 10:03:09', 37, 654, 127, 19.9, 49, 982.5, 11),
('AM107-29', '2023-01-18 10:03:38', 38, 510, 127, 19.4, 84, 981.8, 4),
('AM107-30', '2023-01-18 10:03:38', 38, 518, 127, 19.3, 69, 982.7, 6),
('AM107-31', '2023-01-18 10:04:08', 37.5, 511, 127, 19.4, 110, 982.2, 5),
('AM107-8', '2023-01-18 10:04:09', 34.5, 559, 127, 20.8, 96, 982, 38),
('AM107-35', '2023-01-18 10:04:09', 38, 513, 127, 19.3, 54, 982.2, 10),
('AM107-33', '2023-01-18 10:04:39', 38, 544, 127, 19.3, 47, 982.6, 7),
('AM107-36', '2023-01-18 10:05:08', 37.5, 515, 127, 19.3, 49, 982.4, 7),
('AM107-37', '2023-01-18 10:05:09', 37.5, 532, 127, 19.3, 47, 982.6, 3),
('AM107-11', '2023-01-18 10:05:13', 34.5, 921, 49, 22.8, 0, 981.9, 118),
('AM107-10', '2023-01-18 10:05:38', 34, 592, 127, 20.9, 106, 982.4, 146),
('AM107-32', '2023-01-18 10:05:38', 37.5, 483, 127, 19.4, 73, 981.8, 7),
('AM107-38', '2023-01-18 10:06:09', 37.5, 533, 127, 19.2, 47, 982.4, 5),
('AM107-40', '2023-01-18 10:06:38', 39.5, 490, 127, 19.2, 30, 982.1, 107),
('AM107-43', '2023-01-18 10:07:09', 38.5, 479, 127, 19.2, 101, 982.4, 138),
('AM107-44', '2023-01-18 10:07:09', 39, 512, 127, 19.2, 80, 982.1, 213),
('AM107-42', '2023-01-18 10:07:09', 39, 502, 127, 19.2, 58, 982, 215),
('AM107-41', '2023-01-18 10:07:09', 39, 500, 127, 19.1, 53, 982.7, 138),
('AM107-46', '2023-01-18 10:07:37', 38.5, 501, 113, 19.2, 49, 982.3, 90),
('AM107-47', '2023-01-18 10:07:38', 38, 513, 119, 19.2, 86, 982.4, 182),
('AM107-45', '2023-01-18 10:07:38', 38.5, 513, 112, 19.3, 95, 982.3, 190),
('AM107-12', '2023-01-18 10:08:07', 33.5, 314, 118, 21.1, 27, 982.3, 2),
('AM107-49', '2023-01-18 10:08:09', 38, 509, 107, 19.2, 71, 982.6, 63),
('AM107-48', '2023-01-18 10:08:09', 38, 487, 99, 19.1, 73, 982.2, 160),
('AM107-7', '2023-01-18 10:08:33', 43, 507, 0, 18.5, 1, 982.4, 291),
('AM107-39', '2023-01-18 10:08:38', 39, 498, 126, 19.2, 30, 982.4, 134),
('AM107-50', '2023-01-18 10:08:38', 38, 506, 79, 19.2, 51, 981.8, 42),
('AM107-14', '2023-01-18 10:09:09', 37, 545, 127, 19.7, 243, 982.3, 112),
('AM107-3', '2023-01-18 10:09:13', 36.5, 442, 0, 18.2, 2, 982.3, 38),
('AM107-17', '2023-01-18 10:09:37', 37.5, 529, 120, 19.8, 220, 981.8, 156),
('AM107-9', '2023-01-18 10:09:37', 33.5, 545, 127, 20.8, 90, 982.5, 71),
('AM107-15', '2023-01-18 10:09:38', 37.5, 849, 127, 19.8, 225, 982, 107),
('AM107-13', '2023-01-18 10:09:38', 37, 537, 114, 19.7, 248, 982.6, 45),
('AM107-18', '2023-01-18 10:10:09', 37, 526, 118, 19.8, 188, 981.6, 149),
('AM107-22', '2023-01-18 10:10:09', 37, 562, 105, 19.8, 145, 982.3, 34),
('AM107-20', '2023-01-18 10:10:09', 37, 503, 96, 19.8, 166, 982.2, 48),
('AM107-19', '2023-01-18 10:10:10', 37, 545, 88, 19.8, 173, 982.5, 61),
('AM107-51', '2023-01-18 10:10:38', 38, 509, 46, 19.2, 49, 982.3, 37),
('AM107-4', '2023-01-18 10:10:58', 40, 1357, 127, 20.5, 38, 981.8, 142),
('AM107-23', '2023-01-18 10:11:09', 36.5, 537, 90, 19.8, 133, 982.3, 30),
('AM107-2', '2023-01-18 10:11:25', 41.5, 1160, 111, 18.4, 6, 982.4, 198),
('AM107-5', '2023-01-18 10:11:32', 41.5, 1253, 13, 19.8, 26, 982.2, 122),
('AM107-24', '2023-01-18 10:11:37', 36.5, 561, 91, 19.8, 108, 982.3, 37),
('AM107-25', '2023-01-18 10:12:08', 38, 508, 64, 19.5, 30, 982.5, 10),
('AM107-21', '2023-01-18 10:12:34', 33, 535, 127, 21.5, 77, 982.6, 1),
('AM107-27', '2023-01-18 10:12:37', 38, 516, 78, 19.4, 51, 982.8, 8),
('AM107-26', '2023-01-18 10:12:38', 38, 520, 72, 19.4, 36, 982.5, 4),
('AM107-6', '2023-01-18 10:12:55', 40.5, 936, 0, 18.9, 13, 981.7, 260),
('AM107-34', '2023-01-18 10:13:09', 36.5, 517, 65, 19.7, 66, 982.6, 2),
('AM107-16', '2023-01-18 10:13:09', 38, 630, 126, 19.8, 274, 981.9, 88),
('AM107-28', '2023-01-18 10:13:09', 38, 510, 79, 19.5, 120, 982.7, 6),
('AM107-29', '2023-01-18 10:13:38', 37.5, 511, 64, 19.4, 97, 981.8, 3),
('AM107-30', '2023-01-18 10:13:38', 37.5, 513, 50, 19.4, 78, 982.8, 3),
('AM107-31', '2023-01-18 10:14:08', 37, 515, 66, 19.4, 116, 982.3, 2),
('AM107-35', '2023-01-18 10:14:09', 37.5, 506, 57, 19.3, 58, 982.2, 8),
('AM107-8', '2023-01-18 10:14:09', 34, 542, 46, 21.1, 100, 982.2, 40),
('AM107-33', '2023-01-18 10:14:38', 37.5, 542, 66, 19.3, 49, 982.6, 5),
('AM107-37', '2023-01-18 10:15:09', 37.5, 523, 23, 19.3, 49, 982.6, 4),
('AM107-36', '2023-01-18 10:15:09', 37.5, 507, 39, 19.3, 51, 982.5, 5),
('AM107-11', '2023-01-18 10:15:15', 32, 641, 127, 22.7, 91, 982, 178),
('AM107-10', '2023-01-18 10:15:38', 33.5, 527, 32, 20.7, 109, 982.4, 166),
('AM107-32', '2023-01-18 10:15:38', 37.5, 480, 70, 19.4, 73, 981.9, 4),
('AM107-38', '2023-01-18 10:16:09', 37, 513, 17, 19.3, 49, 982.4, 7),
('AM107-40', '2023-01-18 10:16:38', 39.5, 487, 77, 19.2, 34, 982.1, 112),
('AM107-42', '2023-01-18 10:17:09', 39, 502, 89, 19.2, 52, 982, 218),
('AM107-41', '2023-01-18 10:17:09', 39, 497, 94, 19.1, 43, 982.8, 138),
('AM107-43', '2023-01-18 10:17:10', 38.5, 481, 111, 19.3, 95, 982.4, 140),
('AM107-44', '2023-01-18 10:17:10', 39, 505, 73, 19.2, 82, 982.1, 220),
('AM107-47', '2023-01-18 10:17:37', 38, 515, 98, 19.2, 83, 982.5, 186),
('AM107-45', '2023-01-18 10:17:38', 38.5, 505, 92, 19.3, 95, 982.4, 197),
('AM107-46', '2023-01-18 10:17:38', 38.5, 499, 101, 19.2, 49, 982.3, 93),
('AM107-49', '2023-01-18 10:18:08', 37.5, 503, 80, 19.2, 73, 982.7, 63),
('AM107-48', '2023-01-18 10:18:10', 38, 487, 73, 19.2, 73, 982.2, 162),
('AM107-7', '2023-01-18 10:18:33', 43, 526, 73, 18.6, 8, 982.5, 289),
('AM107-39', '2023-01-18 10:18:37', 39, 492, 85, 19.3, 32, 982.5, 138),
('AM107-50', '2023-01-18 10:18:38', 38, 501, 52, 19.2, 52, 981.8, 40),
('AM107-14', '2023-01-18 10:19:09', 37, 547, 127, 19.8, 280, 982.4, 107),
('AM107-3', '2023-01-18 10:19:13', 36.5, 442, 0, 18.2, 4, 982.3, 39),
('AM107-17', '2023-01-18 10:19:38', 37.5, 530, 127, 19.8, 247, 981.8, 173),
('AM107-13', '2023-01-18 10:19:38', 37, 537, 99, 19.8, 282, 982.6, 48),
('AM107-9', '2023-01-18 10:19:38', 33.5, 513, 116, 20.7, 94, 982.6, 65),
('AM107-15', '2023-01-18 10:19:39', 37.5, 850, 125, 19.8, 254, 982, 109),
('AM107-22', '2023-01-18 10:20:09', 37, 563, 115, 19.8, 160, 982.3, 32),
('AM107-20', '2023-01-18 10:20:09', 37, 499, 127, 19.9, 188, 982.2, 45),
('AM107-19', '2023-01-18 10:20:09', 37, 543, 109, 19.8, 195, 982.5, 47),
('AM107-18', '2023-01-18 10:20:10', 37, 519, 127, 19.9, 208, 981.7, 132),
('AM107-51', '2023-01-18 10:20:38', 38, 501, 32, 19.2, 52, 982.3, 37),
('AM107-4', '2023-01-18 10:20:58', 40, 1396, 127, 20.6, 40, 981.8, 148),
('AM107-23', '2023-01-18 10:21:09', 36, 536, 77, 19.8, 140, 982.4, 26),
('AM107-2', '2023-01-18 10:21:26', 42, 1276, 127, 18.6, 6, 982.5, 212),
('AM107-5', '2023-01-18 10:21:33', 41, 1250, 14, 19.8, 24, 982.3, 118),
('AM107-24', '2023-01-18 10:21:38', 36, 554, 69, 19.9, 115, 982.4, 31),
('AM107-25', '2023-01-18 10:22:09', 38, 498, 52, 19.5, 28, 982.5, 8),
('AM107-21', '2023-01-18 10:22:34', 33, 511, 127, 21.3, 79, 982.7, 0),
('AM107-26', '2023-01-18 10:22:38', 38, 519, 53, 19.4, 40, 982.5, 3),
('AM107-27', '2023-01-18 10:22:38', 38, 515, 53, 19.4, 49, 982.8, 6),
('AM107-6', '2023-01-18 10:22:54', 40.5, 944, 0, 18.9, 14, 981.8, 260),
('AM107-34', '2023-01-18 10:23:09', 36.5, 504, 37, 19.5, 71, 982.6, 3),
('AM107-28', '2023-01-18 10:23:09', 38, 507, 60, 19.5, 107, 982.8, 5),
('AM107-29', '2023-01-18 10:23:37', 37.5, 510, 51, 19.5, 89, 981.9, 5),
('AM107-30', '2023-01-18 10:23:37', 37.5, 511, 48, 19.4, 72, 982.8, 3),
('AM107-35', '2023-01-18 10:24:09', 37.5, 497, 56, 19.3, 56, 982.3, 7),
('AM107-31', '2023-01-18 10:24:09', 37.5, 501, 52, 19.4, 115, 982.4, 3),
('AM107-8', '2023-01-18 10:24:09', 33.5, 523, 118, 21.5, 100, 982.2, 50),
('AM107-33', '2023-01-18 10:24:38', 37.5, 529, 44, 19.3, 47, 982.7, 4),
('AM107-36', '2023-01-18 10:25:09', 37.5, 497, 47, 19.4, 49, 982.6, 4),
('AM107-37', '2023-01-18 10:25:10', 37, 521, 36, 19.3, 47, 982.7, 4),
('AM107-11', '2023-01-18 10:25:15', 31, 593, 127, 22.8, 81, 982, 2),
('AM107-32', '2023-01-18 10:25:38', 37.5, 467, 71, 19.4, 71, 981.9, 5),
('AM107-10', '2023-01-18 10:25:38', 33.5, 500, 127, 20.8, 109, 982.5, 169),
('AM107-38', '2023-01-18 10:26:09', 37, 512, 57, 19.3, 45, 982.5, 6),
('AM107-40', '2023-01-18 10:26:38', 39.5, 482, 88, 19.2, 32, 982.2, 113),
('AM107-41', '2023-01-18 10:27:09', 39, 491, 79, 19.1, 53, 982.9, 142),
('AM107-43', '2023-01-18 10:27:09', 38.5, 476, 66, 19.2, 82, 982.5, 144),
('AM107-44', '2023-01-18 10:27:10', 39, 505, 71, 19.3, 69, 982.2, 226),
('AM107-42', '2023-01-18 10:27:10', 39, 497, 77, 19.2, 47, 982.1, 223),
('AM107-47', '2023-01-18 10:27:37', 38, 514, 65, 19.2, 81, 982.6, 188),
('AM107-46', '2023-01-18 10:27:38', 38.5, 495, 74, 19.2, 49, 982.4, 94),
('AM107-45', '2023-01-18 10:27:38', 38.5, 510, 64, 19.3, 80, 982.5, 200),
('AM107-49', '2023-01-18 10:28:09', 37.5, 504, 81, 19.2, 66, 982.8, 63),
('AM107-48', '2023-01-18 10:28:10', 38, 483, 85, 19.2, 66, 982.3, 165),
('AM107-7', '2023-01-18 10:28:32', 37.5, 670, 127, 20.5, 51, 982.5, 237),
('AM107-39', '2023-01-18 10:28:38', 39, 490, 59, 19.3, 27, 982.6, 138),
('AM107-50', '2023-01-18 10:28:39', 37.5, 495, 87, 19.2, 45, 982, 40),
('AM107-14', '2023-01-18 10:29:10', 36.5, 540, 107, 19.8, 266, 982.5, 101),
('AM107-3', '2023-01-18 10:29:14', 36.5, 445, 0, 18.2, 4, 982.4, 37),
('AM107-17', '2023-01-18 10:29:38', 37, 531, 80, 19.8, 233, 982, 159),
('AM107-13', '2023-01-18 10:29:38', 36.5, 525, 76, 19.8, 250, 982.8, 44),
('AM107-9', '2023-01-18 10:29:38', 33.5, 513, 127, 20.8, 92, 982.7, 61),
('AM107-15', '2023-01-18 10:29:38', 37, 843, 106, 19.8, 249, 982.2, 101),
('AM107-19', '2023-01-18 10:30:15', 36.5, 539, 73, 19.9, 190, 982.7, 42),
('AM107-18', '2023-01-18 10:30:15', 36.5, 522, 80, 19.9, 194, 981.8, 123),
('AM107-22', '2023-01-18 10:30:15', 36.5, 556, 89, 19.8, 155, 982.5, 27),
('AM107-20', '2023-01-18 10:30:16', 36.5, 500, 84, 19.9, 183, 982.4, 41),
('AM107-51', '2023-01-18 10:30:38', 37.5, 504, 70, 19.3, 49, 982.5, 30),
('AM107-4', '2023-01-18 10:31:04', 40, 1410, 127, 20.7, 40, 982, 152),
('AM107-23', '2023-01-18 10:31:10', 35.5, 522, 81, 19.9, 144, 982.5, 19),
('AM107-2', '2023-01-18 10:31:26', 42.5, 1328, 57, 18.7, 9, 982.6, 217),
('AM107-5', '2023-01-18 10:31:33', 41, 1264, 0, 19.7, 26, 982.4, 114),
('AM107-24', '2023-01-18 10:31:37', 36, 541, 97, 19.9, 121, 982.5, 19),
('AM107-25', '2023-01-18 10:32:09', 37.5, 502, 79, 19.5, 30, 982.7, 6),
('AM107-21', '2023-01-18 10:32:34', 33.5, 504, 127, 21.2, 79, 982.9, 4),
('AM107-26', '2023-01-18 10:32:37', 37.5, 509, 106, 19.4, 41, 982.7, 2),
('AM107-27', '2023-01-18 10:32:38', 38, 508, 107, 19.4, 52, 983, 4),
('AM107-6', '2023-01-18 10:32:55', 40.5, 923, 0, 18.9, 14, 982, 263),
('AM107-16', '2023-01-18 10:33:09', 37, 617, 127, 19.9, 282, 982.1, 73),
('AM107-28', '2023-01-18 10:33:09', 37.5, 503, 127, 19.5, 94, 983, 3),
('AM107-34', '2023-01-18 10:33:09', 37, 509, 118, 19.5, 64, 982.8, 5),
('AM107-29', '2023-01-18 10:33:38', 37.5, 510, 107, 19.5, 80, 982.1, 4),
('AM107-30', '2023-01-18 10:33:38', 37.5, 509, 126, 19.4, 67, 983, 2),
('AM107-31', '2023-01-18 10:34:09', 37, 500, 127, 19.4, 103, 982.6, 3),
('AM107-8', '2023-01-18 10:34:09', 33, 530, 127, 21.8, 98, 982.4, 49),
('AM107-35', '2023-01-18 10:34:10', 37.5, 500, 127, 19.4, 54, 982.5, 6),
('AM107-33', '2023-01-18 10:34:38', 37.5, 534, 127, 19.3, 51, 983, 3),
('AM107-36', '2023-01-18 10:35:09', 37, 510, 127, 19.4, 47, 982.8, 3),
('AM107-37', '2023-01-18 10:35:09', 37, 522, 127, 19.4, 49, 983, 2),
('AM107-11', '2023-01-18 10:35:15', 31.5, 617, 127, 22.5, 96, 982.3, 2),
('AM107-32', '2023-01-18 10:35:38', 37.5, 472, 127, 19.4, 82, 982.1, 3),
('AM107-10', '2023-01-18 10:35:38', 33.5, 518, 127, 20.8, 107, 982.7, 167),
('AM107-38', '2023-01-18 10:36:09', 36.5, 520, 127, 19.3, 47, 982.7, 2),
('AM107-40', '2023-01-18 10:36:38', 38.5, 490, 119, 19.2, 40, 982.5, 86),
('AM107-43', '2023-01-18 10:37:09', 37, 492, 102, 19.3, 86, 982.8, 75),
('AM107-44', '2023-01-18 10:37:09', 37.5, 519, 95, 19.2, 71, 982.4, 137),
('AM107-42', '2023-01-18 10:37:09', 37.5, 509, 101, 19.2, 51, 982.3, 140),
('AM107-41', '2023-01-18 10:37:10', 37.5, 503, 94, 19.1, 52, 983.1, 88),
('AM107-46', '2023-01-18 10:37:38', 37, 499, 110, 19.2, 56, 982.6, 41),
('AM107-47', '2023-01-18 10:37:38', 37, 518, 118, 19.2, 92, 982.8, 111),
('AM107-49', '2023-01-18 10:38:09', 36.5, 509, 110, 19.2, 69, 983, 10),
('AM107-48', '2023-01-18 10:38:09', 37, 494, 110, 19.2, 77, 982.5, 89),
('AM107-7', '2023-01-18 10:38:32', 35.5, 544, 127, 21.4, 81, 982.7, 208),
('AM107-39', '2023-01-18 10:38:38', 38.5, 498, 113, 19.3, 26, 982.8, 106),
('AM107-50', '2023-01-18 10:38:38', 37, 509, 120, 19.2, 51, 982.2, 5),
('AM107-14', '2023-01-18 10:39:09', 36.5, 539, 127, 19.9, 275, 982.7, 65),
('AM107-3', '2023-01-18 10:39:13', 36, 449, 0, 18.2, 4, 982.6, 36),
('AM107-17', '2023-01-18 10:39:37', 37, 524, 127, 19.9, 242, 982.2, 101),
('AM107-13', '2023-01-18 10:39:38', 36, 528, 127, 19.8, 270, 983, 27),
('AM107-9', '2023-01-18 10:39:38', 34, 540, 127, 20.9, 88, 982.9, 73),
('AM107-15', '2023-01-18 10:39:38', 36.5, 847, 127, 19.9, 254, 982.4, 78),
('AM107-18', '2023-01-18 10:40:09', 36.5, 510, 124, 19.9, 199, 982, 93),
('AM107-22', '2023-01-18 10:40:09', 36, 546, 125, 19.8, 169, 982.6, 17),
('AM107-20', '2023-01-18 10:40:10', 36, 489, 124, 19.9, 197, 982.5, 30),
('AM107-19', '2023-01-18 10:40:10', 36.5, 531, 127, 19.9, 201, 982.9, 37),
('AM107-51', '2023-01-18 10:40:39', 37.5, 510, 108, 19.3, 49, 982.7, 9),
('AM107-4', '2023-01-18 10:40:58', 40, 1404, 127, 20.8, 40, 982.1, 151),
('AM107-23', '2023-01-18 10:41:09', 35.5, 520, 127, 19.9, 153, 982.7, 18),
('AM107-2', '2023-01-18 10:41:26', 42.5, 1342, 21, 18.8, 13, 982.8, 219),
('AM107-5', '2023-01-18 10:41:33', 41, 1297, 0, 19.7, 28, 982.6, 114),
('AM107-24', '2023-01-18 10:41:37', 35.5, 536, 127, 19.9, 125, 982.7, 19),
('AM107-25', '2023-01-18 10:42:09', 37.5, 500, 102, 19.5, 26, 982.9, 4),
('AM107-21', '2023-01-18 10:42:34', 33.5, 516, 127, 21.4, 71, 983, 18),
('AM107-27', '2023-01-18 10:42:38', 37.5, 512, 73, 19.4, 54, 983.1, 4),
('AM107-26', '2023-01-18 10:42:38', 38, 509, 93, 19.5, 36, 982.8, 5),
('AM107-6', '2023-01-18 10:42:55', 40.5, 916, 0, 18.9, 19, 982.1, 261),
('AM107-16', '2023-01-18 10:43:08', 37.5, 612, 112, 19.9, 313, 982.3, 77),
('AM107-28', '2023-01-18 10:43:09', 37.5, 503, 69, 19.5, 115, 983.1, 4),
('AM107-34', '2023-01-18 10:43:09', 36.5, 501, 58, 19.5, 71, 983, 3),
('AM107-29', '2023-01-18 10:43:38', 37.5, 501, 49, 19.5, 88, 982.2, 3),
('AM107-30', '2023-01-18 10:43:38', 37.5, 504, 53, 19.4, 71, 983.1, 5),
('AM107-31', '2023-01-18 10:44:09', 37, 498, 59, 19.5, 124, 982.7, 6),
('AM107-35', '2023-01-18 10:44:09', 37, 492, 59, 19.4, 56, 982.6, 4),
('AM107-8', '2023-01-18 10:44:10', 33, 544, 127, 21.5, 94, 982.5, 53),
('AM107-33', '2023-01-18 10:44:39', 37.5, 530, 24, 19.3, 54, 983.1, 4),
('AM107-36', '2023-01-18 10:45:08', 37, 496, 33, 19.4, 51, 982.9, 4),
('AM107-37', '2023-01-18 10:45:09', 37, 513, 40, 19.4, 47, 983.1, 3),
('AM107-11', '2023-01-18 10:45:15', 32, 558, 127, 22.1, 83, 982.4, 2),
('AM107-22', '2023-01-18 10:50:08', 36.5, 548, 36, 19.9, 174, 982.6, 21),
('AM107-20', '2023-01-18 10:50:08', 36.5, 492, 24, 19.9, 201, 982.6, 35),
('AM107-19', '2023-01-18 10:50:08', 36.5, 528, 16, 19.9, 208, 982.9, 41),
('AM107-18', '2023-01-18 10:50:09', 36.5, 509, 24, 19.9, 217, 982, 130),
('AM107-51', '2023-01-18 10:50:37', 37.5, 491, 28, 19.3, 47, 982.7, 27),
('AM107-4', '2023-01-18 10:50:57', 40, 1444, 127, 20.8, 40, 982.1, 154),
('AM107-23', '2023-01-18 10:51:08', 35.5, 517, 36, 19.9, 158, 982.7, 14),
('AM107-2', '2023-01-18 10:51:25', 42.5, 1331, 45, 18.8, 9, 982.8, 216),
('AM107-5', '2023-01-18 10:51:31', 40.5, 1213, 0, 19.7, 13, 982.6, 110),
('AM107-24', '2023-01-18 10:51:37', 35.5, 537, 34, 20, 131, 982.7, 18),
('AM107-25', '2023-01-18 10:52:08', 37.5, 494, 10, 19.5, 30, 982.8, 8),
('AM107-21', '2023-01-18 10:52:33', 33, 492, 127, 21.6, 62, 983, 23),
('AM107-26', '2023-01-18 10:52:37', 38, 505, 27, 19.5, 36, 982.8, 8),
('AM107-27', '2023-01-18 10:52:37', 38, 502, 23, 19.4, 60, 983.1, 8),
('AM107-6', '2023-01-18 10:52:53', 40.5, 936, 0, 18.9, 18, 982.1, 263),
('AM107-34', '2023-01-18 10:53:08', 36.5, 492, 32, 19.4, 71, 982.9, 3),
('AM107-16', '2023-01-18 10:53:08', 37.5, 604, 46, 19.9, 319, 982.3, 80),
('AM107-28', '2023-01-18 10:53:08', 37.5, 491, 34, 19.5, 117, 983.1, 2),
('AM107-29', '2023-01-18 10:53:36', 37.5, 493, 34, 19.5, 99, 982.2, 2),
('AM107-30', '2023-01-18 10:53:37', 37, 496, 33, 19.4, 81, 983.1, 2),
('AM107-35', '2023-01-18 10:54:08', 37, 482, 47, 19.4, 58, 982.6, 5),
('AM107-31', '2023-01-18 10:54:08', 37, 490, 39, 19.5, 129, 982.7, 1),
('AM107-8', '2023-01-18 10:54:08', 33, 532, 127, 21.3, 94, 982.5, 55),
('AM107-33', '2023-01-18 10:54:37', 37.5, 516, 53, 19.4, 56, 983, 2),
('AM107-36', '2023-01-18 10:55:08', 37, 490, 50, 19.4, 49, 982.8, 4),
('AM107-37', '2023-01-18 10:55:09', 36.5, 501, 62, 19.4, 45, 983, 3),
('AM107-11', '2023-01-18 10:55:14', 32, 528, 127, 22, 81, 982.3, 4),
('AM107-32', '2023-01-18 10:55:37', 37, 461, 69, 19.5, 90, 982.2, 2),
('AM107-10', '2023-01-18 10:55:37', 33, 494, 127, 20.9, 96, 982.8, 167),
('AM107-38', '2023-01-18 10:56:07', 36.5, 501, 69, 19.3, 43, 982.8, 9),
('AM107-40', '2023-01-18 10:56:37', 39, 469, 61, 19.2, 36, 982.5, 104),
('AM107-41', '2023-01-18 10:57:08', 38.5, 487, 65, 19.2, 49, 983.1, 124),
('AM107-43', '2023-01-18 10:57:09', 38, 475, 60, 19.3, 75, 982.8, 119),
('AM107-44', '2023-01-18 10:57:09', 38, 500, 70, 19.3, 64, 982.5, 193),
('AM107-42', '2023-01-18 10:57:09', 38.5, 489, 62, 19.2, 47, 982.3, 195),
('AM107-47', '2023-01-18 10:57:36', 37, 494, 76, 19.2, 81, 982.8, 155),
('AM107-46', '2023-01-18 10:57:37', 37.5, 483, 67, 19.2, 45, 982.6, 74),
('AM107-45', '2023-01-18 10:57:37', 37.5, 496, 55, 19.3, 83, 982.7, 167),
('AM107-49', '2023-01-18 10:58:07', 36.5, 487, 68, 19.3, 56, 983, 41),
('AM107-48', '2023-01-18 10:58:09', 37, 470, 77, 19.2, 66, 982.6, 133),
('AM107-7', '2023-01-18 10:58:31', 31.5, 534, 127, 23.7, 62, 982.6, 231),
('AM107-50', '2023-01-18 10:58:37', 37, 490, 70, 19.3, 34, 982.2, 32),
('AM107-39', '2023-01-18 10:58:37', 38.5, 481, 62, 19.3, 17, 982.8, 129),
('AM107-14', '2023-01-18 10:59:09', 36, 528, 81, 19.9, 261, 982.7, 86),
('AM107-3', '2023-01-18 10:59:12', 36, 462, 0, 18.3, 4, 982.6, 38),
('AM107-17', '2023-01-18 10:59:37', 36.5, 513, 78, 19.9, 227, 982.2, 145),
('AM107-13', '2023-01-18 10:59:37', 36, 511, 81, 19.8, 234, 983, 41),
('AM107-9', '2023-01-18 10:59:37', 33, 507, 127, 21.3, 47, 982.9, 106),
('AM107-15', '2023-01-18 10:59:38', 36.5, 830, 88, 19.9, 236, 982.4, 94),
('AM107-19', '2023-01-18 11:00:14', 36, 520, 81, 19.9, 179, 982.9, 31),
('AM107-18', '2023-01-18 11:00:14', 36, 506, 91, 20, 181, 982, 110),
('AM107-22', '2023-01-18 11:00:14', 36, 545, 80, 19.9, 143, 982.7, 16),
('AM107-20', '2023-01-18 11:00:15', 36, 485, 78, 19.9, 173, 982.6, 29),
('AM107-51', '2023-01-18 11:00:37', 37, 495, 54, 19.3, 28, 982.7, 25),
('AM107-4', '2023-01-18 11:01:02', 39.5, 1411, 127, 21, 38, 982.1, 154),
('AM107-23', '2023-01-18 11:01:08', 35, 509, 75, 19.9, 117, 982.7, 11),
('AM107-2', '2023-01-18 11:01:25', 42, 1280, 11, 18.8, 11, 982.8, 211),
('AM107-5', '2023-01-18 11:01:32', 40.5, 1189, 0, 19.7, 5, 982.6, 104),
('AM107-24', '2023-01-18 11:01:37', 35, 519, 79, 20, 95, 982.7, 10),
('AM107-25', '2023-01-18 11:02:08', 37, 487, 67, 19.5, 15, 982.9, 3),
('AM107-21', '2023-01-18 11:02:33', 32.5, 495, 111, 21.4, 22, 983, 16),
('AM107-26', '2023-01-18 11:02:36', 37.5, 507, 48, 19.5, 25, 982.8, 3),
('AM107-27', '2023-01-18 11:02:37', 37.5, 501, 44, 19.4, 30, 983.1, 3),
('AM107-6', '2023-01-18 11:02:53', 40.5, 925, 0, 19, 18, 982.1, 265),
('AM107-16', '2023-01-18 11:03:08', 36.5, 601, 55, 19.9, 265, 982.3, 64),
('AM107-28', '2023-01-18 11:03:08', 37.5, 489, 50, 19.6, 72, 983.1, 1),
('AM107-34', '2023-01-18 11:03:09', 36.5, 491, 37, 19.4, 34, 983, 6),
('AM107-29', '2023-01-18 11:03:36', 37.5, 497, 40, 19.5, 51, 982.2, 2),
('AM107-30', '2023-01-18 11:03:37', 37, 497, 49, 19.4, 40, 983.2, 2),
('AM107-35', '2023-01-18 11:04:08', 37, 492, 30, 19.4, 23, 982.7, 6),
('AM107-31', '2023-01-18 11:04:08', 37, 488, 35, 19.5, 70, 982.7, 6),
('AM107-8', '2023-01-18 11:04:08', 33.5, 514, 61, 21.2, 17, 982.5, 49),
('AM107-33', '2023-01-18 11:04:37', 37.5, 513, 21, 19.3, 19, 983.1, 2),
('AM107-36', '2023-01-18 11:05:08', 37, 493, 7, 19.4, 15, 982.9, 5),
('AM107-37', '2023-01-18 11:05:09', 37, 511, 6, 19.4, 13, 983.1, 4),
('AM107-11', '2023-01-18 11:05:14', 32, 518, 2, 21.9, 7, 982.4, 7),
('AM107-32', '2023-01-18 11:05:37', 37, 462, 0, 19.5, 47, 982.3, 4),
('AM107-10', '2023-01-18 11:05:37', 33.5, 495, 0, 20.8, 11, 982.9, 164),
('AM107-38', '2023-01-18 11:06:08', 36.5, 514, 0, 19.3, 11, 982.8, 10),
('AM107-40', '2023-01-18 11:06:37', 38, 488, 0, 19.3, 10, 982.6, 76),
('AM107-41', '2023-01-18 11:07:08', 37.5, 500, 0, 19.2, 21, 983.2, 71),
('AM107-43', '2023-01-18 11:07:08', 36.5, 487, 0, 19.3, 44, 982.9, 49),
('AM107-44', '2023-01-18 11:07:09', 36.5, 512, 0, 19.2, 36, 982.5, 92),
('AM107-47', '2023-01-18 11:07:36', 36.5, 513, 0, 19.2, 38, 982.9, 65),
('AM107-46', '2023-01-18 11:07:37', 36, 496, 0, 19.2, 19, 982.7, 19),
('AM107-45', '2023-01-18 11:07:37', 36.5, 506, 0, 19.3, 49, 982.8, 70),
('AM107-49', '2023-01-18 11:08:08', 36, 504, 0, 19.2, 27, 983.1, 1),
('AM107-48', '2023-01-18 11:08:08', 36.5, 488, 0, 19.2, 34, 982.6, 49),
('AM107-7', '2023-01-18 11:08:31', 32, 507, 0, 22.7, 9, 982.7, 217),
('AM107-39', '2023-01-18 11:08:37', 38, 491, 0, 19.3, 2, 982.9, 100),
('AM107-50', '2023-01-18 11:08:38', 36.5, 505, 0, 19.2, 15, 982.3, 1),
('AM107-14', '2023-01-18 11:09:08', 35.5, 523, 0, 19.9, 279, 982.8, 43),
('AM107-3', '2023-01-18 11:09:12', 36, 467, 0, 18.3, 2, 982.7, 37);