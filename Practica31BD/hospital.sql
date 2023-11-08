-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-11-2023 a las 03:36:11
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hospital`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctor`
--

CREATE TABLE `doctor` (
  `idDoc` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `Edad` int(11) NOT NULL,
  `sexo` varchar(20) DEFAULT NULL,
  `idSecretaria` int(11) NOT NULL,
  `idPaciente` int(11) NOT NULL,
  `idHospital` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `doctor`
--

INSERT INTO `doctor` (`idDoc`, `nombre`, `Edad`, `sexo`, `idSecretaria`, `idPaciente`, `idHospital`) VALUES
(120, 'Lizeth Damaso', 25, 'Femenino', 1, 11, 111),
(121, 'Adan Preciado', 32, 'Masculino', 2, 22, 111),
(122, 'Adan Escamila', 26, 'Masculino', 3, 33, 111),
(123, 'Jesus Hernandez', 27, 'Masculino', 4, 44, 222),
(124, 'Rogelio Villalobos', 28, 'Masculino', 5, 55, 111);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospitales`
--

CREATE TABLE `hospitales` (
  `idHospital` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `Direccion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hospitales`
--

INSERT INTO `hospitales` (`idHospital`, `nombre`, `Direccion`) VALUES
(111, 'Angeles', 'Zona Rio'),
(222, 'Excel', 'Zona Urbana Rio'),
(333, 'Luis Luan', 'Salvatierra');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `idPaciente` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `Edad` int(11) NOT NULL,
  `sexo` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`idPaciente`, `nombre`, `Edad`, `sexo`) VALUES
(11, 'Rodrigo Villegas', 22, 'Masculino'),
(22, 'Militza Elenes', 15, 'Femenino'),
(33, 'Yolmir Damaso', 3, 'Femenino'),
(44, 'Jesus Elenes', 33, 'Masculino'),
(55, 'Jesus Mayo', 29, 'Masculino');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `secretaria`
--

CREATE TABLE `secretaria` (
  `idSecretaria` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `Edad` int(11) NOT NULL,
  `sexo` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `secretaria`
--

INSERT INTO `secretaria` (`idSecretaria`, `nombre`, `Edad`, `sexo`) VALUES
(1, 'Karla Damaso', 29, 'Femenino'),
(2, 'Sibet Damaso', 30, 'Femenino'),
(3, 'Yolanda Negrete', 53, 'Femenino'),
(4, 'Tomas Damaso', 55, 'Masculino'),
(5, 'Raul Espinoza', 32, 'Masculino');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`idDoc`),
  ADD KEY `idHospital` (`idHospital`),
  ADD KEY `idSecretaria` (`idSecretaria`),
  ADD KEY `idPaciente` (`idPaciente`);

--
-- Indices de la tabla `hospitales`
--
ALTER TABLE `hospitales`
  ADD PRIMARY KEY (`idHospital`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`idPaciente`);

--
-- Indices de la tabla `secretaria`
--
ALTER TABLE `secretaria`
  ADD PRIMARY KEY (`idSecretaria`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `doctor`
--
ALTER TABLE `doctor`
  ADD CONSTRAINT `doctor_ibfk_1` FOREIGN KEY (`idHospital`) REFERENCES `hospitales` (`idHospital`),
  ADD CONSTRAINT `doctor_ibfk_2` FOREIGN KEY (`idSecretaria`) REFERENCES `secretaria` (`idSecretaria`),
  ADD CONSTRAINT `doctor_ibfk_3` FOREIGN KEY (`idPaciente`) REFERENCES `paciente` (`idPaciente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
