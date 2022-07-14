-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-07-2022 a las 20:41:11
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clubsdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clubs`
--

CREATE TABLE `clubs` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `address` varchar(128) NOT NULL,
  `phone` varchar(64) NOT NULL,
  `accredited` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `clubs`
--

INSERT INTO `clubs` (`id`, `name`, `full_name`, `address`, `phone`, `accredited`) VALUES
(1, 'Aldosivi', 'Aldosivi', 'Av. De los trabajadores 1800 - Mar del Plata', '+542234844231', 1),
(2, 'Argentinos Juniors', 'Asociación Atlética Argentinos Juniors', 'Punta Arenas 1271, CABA', '+541145516887', 1),
(3, 'Arsenal', 'Arsenal Fútbol Club', 'Julio Humberto Grondona 3660, Sarandí- Buenos Aires', '+541142040755', 1),
(4, 'Atletico Tucuman', 'Club Atlético Tucumán', '25 de Mayo 1351, SM de Tucuman', '+543814976180', 1),
(5, 'Bandfield', 'Club Atlético Banfield', 'Vergara 1635, Banfield- Buenos Aires', '+541142421209', 1),
(6, 'Barracas Central', 'Club Atlético Barracas Central', 'Luna 1211 – Barracas – CABA', '+541143015855', 1),
(7, 'Boca Juniors', 'Club Atlético Boca Juniors', 'Brandsen 805, CABA', '+541157771200', 1),
(8, 'Central Cordoba', 'Club Atlético Central Córdoba', 'Granadero Saavedra N°260- Santiago del Estero', '+5438546001826', 1),
(9, 'Colon', 'Club Atlético Colón', 'Juan José Paso 3535, Santa Fe- Argentina', '+5403424598025', 1),
(10, 'Defensa y Justicia', 'Club Social y Deportivo Defensa y Justicia', 'Av. Humahuaca 244, Santa Rosa, Buenos Aires', '+541142372327', 1),
(11, 'Estudiantes', 'Club Estudiantes de La Plata', 'Av. 53 N° 620 - La Plata', '+5402214257025', 1),
(12, 'Gimnasia', 'Club de Gimnasia y Esgrima La Plata', 'Calle 4 e/ 51 y 53 Nº 979 - La Plata', '+5402214222510', 1),
(13, 'Godoy Cruz', 'Club Deportivo Godoy Cruz Antonio Tomba', 'Balcarce 477, Godoy Cruz- Mendoza', '+542614245144', 1),
(14, 'Huracan', 'Club Atlético Huracán', 'Av. Caseros 3159, CABA', '+541149119313', 1),
(15, 'Independiente', 'Club Atlético Independiente', 'Bochini 751, Avellaneda', '+541142017873', 1),
(16, 'Lanus', 'Club Atlético Lanús', 'Av. 9 de Julio 1680, Lanús Este – Buenos Aires', '+541143579200', 1),
(17, 'Newell’s', 'Club Atlético Newell’s Old Boys', 'Parque Independencia S/N, Santa Fe', '+5403414254422', 1),
(18, 'Patronato', 'Club Atlético Patronato', 'Bartolome Grella 874, Paraná - Entre Rios', '+5403434243766', 1),
(19, 'Platense', 'Club Atlético Platense', 'Juan Zufriategui 2021, Vicente López.', '+541147914748', 1),
(20, 'Racing', 'Racing Club', 'Av. Mitre 934, Avellaneda', '+541142291300', 1),
(21, 'River Plate', 'Club Atlético River Plate', 'Av. Figueroa Alcorta 7597, CABA', '+541147891200', 1),
(22, 'Rosario Central', 'Club Atlético Rosario Central', 'Mitre 853, Ciudad de Rosario - Santa Fe', '+08101221889', 1),
(23, 'San Lorenzo', 'Club Atlético San Lorenzo de Almagro', 'Av. La Plata 1782, CABA', '+541152634600', 1),
(24, 'Sarmiento', 'Club Atlético Sarmiento', 'Gandini 801, Junín - Provincia de Buenos Aires', '+542363433432', 1),
(25, 'Talleres', 'Club Atlético Talleres', 'Rosario de Santa Fe 15, Córdoba', '+543514282716', 1),
(26, 'Tigre', 'Club Atlético Tigre', 'Guido Spano 1053, Victoria - Provincia de Bs.As', '+541147443949', 1),
(27, 'Union', 'Club Atletico Union', 'Av. López y Planes N°3513 Santa Fe', '+543424539449', 1),
(28, 'Velez', 'Club Atlético Vélez Sarsfield', 'Avenida Juan B. Justo 9200, CABA', '+541146415663', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clubs`
--
ALTER TABLE `clubs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clubs`
--
ALTER TABLE `clubs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
