-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-12-2022 a las 15:13:41
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
-- Base de datos: `eden_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `abono`
--

CREATE TABLE `abono` (
  `id_abono` int(11) NOT NULL,
  `id_venta_local` int(11) DEFAULT NULL,
  `id_pedido_local` int(11) DEFAULT NULL,
  `valor` float NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1 COMMENT '0:inactivo, 1:activo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `abono`
--

INSERT INTO `abono` (`id_abono`, `id_venta_local`, `id_pedido_local`, `valor`, `estado`) VALUES
(1, 19, NULL, 25000, 1),
(2, 19, NULL, 25000, 1),
(3, 25, NULL, 65625, 1),
(4, 26, NULL, 31250, 1),
(5, 28, NULL, 46875, 0),
(6, 30, NULL, 25000, 1),
(7, 31, NULL, 31250, 1),
(8, 32, NULL, 31250, 1),
(9, 33, NULL, 62500, 0),
(10, NULL, 5, 13125, 1),
(11, NULL, 6, 3750, 1),
(12, NULL, 7, 1000, 1),
(13, NULL, 8, 9375, 1),
(14, NULL, 8, 9375, 1),
(15, NULL, 9, 5250, 1),
(16, NULL, 9, 5250, 1),
(17, NULL, 10, 3500, 1),
(18, NULL, 10, 3500, 1),
(19, 34, NULL, 5250, 1),
(20, 35, NULL, 1000, 1),
(21, 36, NULL, 3500, 1),
(22, NULL, 11, 3500, 1),
(23, NULL, 11, 3500, 1),
(24, NULL, 14, 2500, 1),
(25, NULL, 15, 7500, 1),
(26, NULL, 15, 7500, 1),
(27, NULL, 15, 7500, 1),
(28, NULL, 16, 6750, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `estado`) VALUES
(3, 'Bebidas', 1),
(4, 'Pan', 1),
(5, 'Arepas', 1),
(6, 'jugos', 1),
(9, 'fritos', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes_informativos`
--

CREATE TABLE `clientes_informativos` (
  `id_cliente_documento` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `apellido` varchar(300) NOT NULL,
  `telefono` bigint(15) NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes_informativos`
--

INSERT INTO `clientes_informativos` (`id_cliente_documento`, `nombre`, `apellido`, `telefono`, `estado`) VALUES
(111, 'Cliente', 'Informativo', 8885, 1),
(222, 'Juanito', 'Alimaña', 3123, 1),
(223, 'Daniel', 'guzman', 45321884, 1),
(333, 'Pedro', 'Navaja', 333, 1),
(999, 'Josesito', 'Vegano', 310002022, 1),
(7789, 'Jose', 'Pelaes', 1231232, 1),
(23211, 'andrea', 'molina', 3212312, 1),
(103666, 'carlos', 'gonzalez', 4780711, 1),
(123123, 'Rosario', 'Tijeras', 3334455, 1),
(134123, 'JUAN DIEGO', 'ARTEAGA PEREZ', 23141234, 1),
(323423, 'JUAN DIEGO', 'ARTEAGA PEREZ', 23234234, 1),
(564456, 'JUAN DIEGO', 'ARTEAGA PEREZ', 34212, 1),
(566556, 'JUAN DIEGO', 'ARTEAGA PEREZ', 123123, 1),
(1000000, 'LIZETH LORENA', 'SANDOVAL RAMOS', 3146361513, 1),
(1231231, 'Nuevo', 'Cliente editado', 2147483647, 1),
(1234567, 'daniela', 'rojas', 305841268, 1),
(2342343, 'JUAN DIEGO', 'ARTEAGA PEREZ', 112312, 1),
(3423423, 'JUAN DIEGO', 'ARTEAGA PEREZ', 234234, 1),
(4534234, 'JUAN DIEGO', 'ARTEAGA PEREZ', 123123123, 1),
(7892263, 'Daniel', 'Suarez', 3007896542, 1),
(32412313, 'qweqwe', 'qweeqwe', 23123123, 1),
(45345234, 'qweqwe', 'qweqw', 12312312, 1),
(97896745, 'Juan Diego', 'Arteaga', 1231234324, 1),
(123147159, 'danielito', 'perez', 56524645, 1),
(123215556, 'Daniela ', 'Rojas', 2147483647, 1),
(123458963, 'CARLOS MAURICIO', 'GONZALEZ', 3127896534, 1),
(125146841, 'Ediccson', 'Quiroz', 45613216, 1),
(324123423, 'pepito', 'Perez', 3005672254, 1),
(1037632160, 'JEFERSSON DANIEL', 'SALAZAR', 3006483858, 1),
(1232344567, 'JUAN DIEGO', 'ARTEAGA PEREZ', 2147483647, 1),
(1235423534, 'hola', 'hola', 213124123, 1),
(2147483647, 'Clara', 'Salazar', 555, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_pedido`
--

CREATE TABLE `detalle_pedido` (
  `id_detalle_pedido` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unitario` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `detalle_pedido`
--

INSERT INTO `detalle_pedido` (`id_detalle_pedido`, `id_producto`, `id_pedido`, `cantidad`, `precio_unitario`) VALUES
(58, 14, 52, 10, 2000),
(59, 15, 52, 10, 3500),
(60, 14, 53, 10, 2000),
(61, 15, 53, 10, 3500),
(62, 15, 54, 1, 3500),
(63, 16, 54, 33, 1000),
(64, 16, 55, 33, 1000),
(65, 16, 56, 33, 1000),
(66, 16, 57, 33, 1000),
(67, 16, 58, 33, 1000),
(68, 16, 59, 33, 1000),
(69, 16, 60, 33, 1000),
(70, 16, 61, 33, 1000),
(71, 16, 62, 33, 1000),
(72, 16, 63, 33, 1000),
(73, 15, 64, 35, 3500),
(74, 15, 65, 35, 3500),
(75, 15, 66, 35, 3500),
(76, 16, 67, 1, 1000),
(77, 16, 68, 20, 1000),
(78, 16, 69, 5, 1000),
(79, 17, 69, 10, 2500),
(80, 16, 70, 10, 1000),
(81, 17, 70, 10, 2500),
(82, 17, 71, 1, 2500),
(83, 19, 71, 1, 2000),
(84, 17, 72, 1, 2500),
(85, 19, 72, 1, 2000),
(86, 17, 73, 1, 2500),
(87, 19, 73, 1, 2000),
(88, 17, 74, 1, 2500),
(89, 19, 74, 1, 2000),
(90, 17, 75, 1, 2500),
(91, 19, 75, 1, 2000),
(92, 17, 76, 1, 2500),
(93, 19, 76, 1, 2000),
(94, 16, 77, 20, 1000),
(95, 16, 78, 3, 1000),
(96, 16, 79, 12, 1000),
(97, 17, 79, 5, 2500),
(98, 26, 79, 2, 2500),
(99, 27, 79, 3, 1800),
(100, 25, 80, 10, 2600),
(101, 26, 80, 50, 2500);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_pedido_local`
--

CREATE TABLE `detalle_pedido_local` (
  `id_detalle_pedido_local` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_pedido_local` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unitario` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `detalle_pedido_local`
--

INSERT INTO `detalle_pedido_local` (`id_detalle_pedido_local`, `id_producto`, `id_pedido_local`, `cantidad`, `precio_unitario`) VALUES
(1, 16, 1, 25, 1000),
(2, 15, 2, 2, 3500),
(3, 15, 3, 2, 3500),
(4, 15, 4, 2, 3500),
(5, 15, 5, 5, 3500),
(6, 17, 6, 2, 2500),
(7, 16, 7, 2, 1000),
(8, 15, 8, 3, 3500),
(9, 16, 8, 2, 1000),
(10, 16, 9, 2, 1000),
(11, 17, 9, 2, 2500),
(12, 16, 10, 2, 1000),
(13, 17, 10, 2, 2500),
(14, 16, 11, 2, 1000),
(15, 17, 11, 2, 2500),
(16, 16, 12, 2, 1000),
(17, 15, 12, 3, 3500),
(18, 16, 13, 1, 1000),
(19, 17, 14, 2, 2500),
(20, 16, 15, 1, 1000),
(21, 17, 15, 2, 2500),
(22, 19, 15, 2, 2000),
(23, 17, 16, 2, 2500),
(24, 19, 16, 2, 2000),
(25, 23, 17, 20, 800),
(26, 25, 18, 22, 2600),
(27, 26, 18, 13, 2500),
(28, 24, 18, 12, 1500),
(29, 17, 19, 39, 600),
(30, 16, 19, 22, 3500),
(31, 17, 20, 22, 600),
(32, 28, 20, 5, 3000),
(33, 23, 20, 50, 800),
(34, 15, 21, 25, 2500),
(35, 25, 21, 33, 2600),
(36, 28, 21, 3, 3000),
(37, 23, 22, 300, 800),
(38, 24, 22, 100, 1500),
(39, 26, 22, 50, 2500),
(40, 17, 23, 29, 600),
(41, 26, 23, 30, 2500),
(42, 24, 23, 20, 1500),
(43, 15, 24, 233, 2500),
(44, 23, 24, 200, 800),
(45, 25, 24, 45, 2600),
(46, 23, 25, 39, 800),
(47, 25, 25, 22, 2600),
(48, 27, 25, 22, 1800),
(49, 17, 26, 22, 600),
(50, 16, 26, 33, 3500),
(51, 25, 26, 33, 2600),
(52, 28, 26, 33, 3000),
(53, 25, 27, 40, 2600),
(54, 28, 27, 33, 3000),
(55, 25, 27, 11, 2600),
(56, 16, 28, 33, 3500),
(57, 28, 28, 20, 3000),
(58, 25, 28, 200, 2600),
(59, 26, 29, 300, 2500),
(60, 17, 29, 100, 600),
(61, 23, 29, 200, 800),
(62, 23, 30, 100, 800),
(63, 26, 30, 223, 2500),
(64, 28, 30, 150, 3000),
(65, 17, 31, 22, 600),
(66, 24, 31, 23, 1500),
(67, 23, 31, 50, 800),
(68, 24, 32, 200, 1500),
(69, 17, 32, 200, 600),
(70, 23, 32, 300, 800),
(71, 24, 33, 80, 1500),
(72, 15, 33, 67, 2500),
(73, 23, 33, 50, 800),
(74, 16, 34, 130, 3500),
(75, 26, 34, 130, 2500),
(76, 23, 34, 130, 800),
(77, 15, 35, 100, 2500),
(78, 26, 35, 100, 2500),
(79, 23, 35, 100, 800);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_venta`
--

CREATE TABLE `detalle_venta` (
  `id_detalle_venta` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_venta` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unitario` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `detalle_venta`
--

INSERT INTO `detalle_venta` (`id_detalle_venta`, `id_producto`, `id_venta`, `cantidad`, `precio_unitario`) VALUES
(7, 14, 10, 200, 2000),
(8, 16, 10, 200, 1000),
(9, 14, 11, 200, 2000),
(10, 16, 11, 200, 1000),
(11, 15, 11, 200, 3500),
(12, 14, 12, 123, 2000),
(13, 16, 12, 234, 1000),
(14, 14, 13, 200, 2000),
(15, 16, 13, 200, 1000),
(16, 12, 13, 200, 300),
(17, 14, 14, 300, 2000),
(18, 16, 14, 300, 1000),
(19, 15, 15, 44, 3500),
(20, 14, 16, 1, 2000),
(21, 16, 17, 44, 1000),
(22, 15, 17, 22, 3500),
(23, 15, 18, 22, 3500),
(24, 15, 19, 22, 3500),
(25, 17, 19, 32, 2500),
(26, 16, 20, 20, 1000),
(27, 16, 21, 25, 1000),
(28, 15, 22, 25, 3500),
(29, 15, 23, 34, 3500),
(30, 17, 24, 123, 2500),
(31, 17, 25, 35, 2500),
(32, 17, 26, 25, 2500),
(33, 16, 27, 4534, 1000),
(34, 17, 28, 25, 2500),
(35, 16, 29, 30, 1000),
(36, 17, 30, 20, 2500),
(37, 17, 31, 25, 2500),
(38, 17, 32, 25, 2500),
(39, 17, 33, 50, 2500),
(40, 16, 34, 2, 1000),
(41, 17, 34, 2, 2500),
(42, 16, 35, 2, 1000),
(43, 15, 36, 1, 3500),
(44, 16, 36, 1, 1000),
(45, 17, 36, 1, 2500);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedido` int(11) NOT NULL,
  `id_cliente_documento` int(11) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `fecha_registro` date NOT NULL,
  `precio_total` float NOT NULL,
  `estado` int(11) NOT NULL,
  `fecha_entrega` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `id_cliente_documento`, `tipo`, `fecha_registro`, `precio_total`, `estado`, `fecha_entrega`) VALUES
(51, 123123, 'cotizacion', '2022-10-05', 55000, 1, '2022-09-17'),
(52, 123123, 'cotizacion', '2022-10-05', 55000, 1, '2022-09-17'),
(53, 123123, 'cotizacion', '2022-10-05', 55000, 1, '2022-09-17'),
(54, 125146841, 'cotizacion', '2022-10-10', 36500, 1, '2022-09-17'),
(55, 125146841, 'cotizacion', '2022-10-10', 33000, 1, '2022-09-17'),
(56, 125146841, 'pedido', '2022-10-10', 33000, 0, '2022-10-31'),
(57, 125146841, 'pedido', '2022-10-10', 33000, 1, '2022-10-31'),
(58, 125146841, 'pedido', '2022-10-11', 33000, 1, '2022-10-31'),
(59, 125146841, 'pedido', '2022-10-12', 33000, 1, '2022-10-31'),
(60, 125146841, 'pedido', '2022-10-13', 33000, 1, '2022-10-31'),
(61, 125146841, 'pedido', '2022-10-14', 33000, 1, '2022-10-31'),
(62, 125146841, 'pedido', '2022-10-14', 33000, 0, '2022-10-31'),
(63, 125146841, 'pedido', '2022-10-16', 33000, 0, '2022-10-31'),
(64, 97896745, 'cotizacion', '2022-11-16', 122500, 0, '2022-09-17'),
(65, 97896745, 'cotizacion', '2022-11-20', 122500, 1, '2022-09-17'),
(66, 97896745, 'pedido', '2022-11-21', 122500, 0, '2022-11-16'),
(67, 103666, 'pedido', '2022-12-01', 1000, 1, '2022-12-02'),
(68, 103666, 'pedido', '2022-12-01', 1000, 0, '2022-12-02'),
(69, 103666, 'pedido', '2022-12-01', 30000, 1, '2022-12-02'),
(70, 103666, 'pedido', '2022-12-01', 30000, 1, '2022-12-03'),
(71, 103666, 'pedido', '2022-12-04', 4500, 0, '2022-12-06'),
(72, 103666, 'pedido', '2022-12-04', 4500, 0, '2022-12-15'),
(73, 103666, 'cotizacion', '2022-12-04', 4500, 0, '2022-09-17'),
(74, 103666, 'cotizacion', '2022-12-04', 4500, 0, '2022-09-17'),
(75, 103666, 'pedido', '2022-12-04', 4500, 1, '2022-12-05'),
(76, 103666, 'pedido', '2022-12-05', 4500, 0, '2022-12-05'),
(77, 103666, 'pedido', '2022-12-05', 20000, 0, '2022-12-05'),
(78, 103666, 'cotizacion', '2022-12-05', 3000, 1, '2022-09-17'),
(79, 323423, 'pedido', '2022-12-06', 34900, 1, '2022-12-24'),
(80, 1000000, 'cotizacion', '2022-12-06', 151000, 1, '2022-09-17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido_local`
--

CREATE TABLE `pedido_local` (
  `id_pedido_local` int(11) NOT NULL,
  `id_cliente_documento` int(11) NOT NULL,
  `fecha_registro` date NOT NULL,
  `fecha_entrega` date NOT NULL,
  `precio_total` float NOT NULL COMMENT '0: inactivo,',
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pedido_local`
--

INSERT INTO `pedido_local` (`id_pedido_local`, `id_cliente_documento`, `fecha_registro`, `fecha_entrega`, `precio_total`, `estado`) VALUES
(1, 111, '2022-11-10', '2022-11-21', 25000, 0),
(2, 111, '2022-11-29', '2022-09-29', 7000, 1),
(3, 111, '2022-11-29', '2022-09-30', 7000, 1),
(4, 111, '2022-11-29', '2022-12-01', 7000, 1),
(5, 111, '2022-11-30', '2022-12-02', 17500, 0),
(6, 111, '2022-12-03', '2022-12-04', 5000, 2),
(7, 111, '2022-12-03', '2022-12-04', 2000, 2),
(8, 111, '2022-12-03', '2022-12-04', 12500, 2),
(9, 111, '2022-12-03', '2022-12-04', 7000, 2),
(10, 111, '2022-12-03', '2022-12-04', 7000, 2),
(11, 111, '2022-12-04', '2022-12-04', 7000, 2),
(12, 111, '2022-12-04', '2022-12-04', 12500, 1),
(13, 111, '2022-12-05', '2022-12-05', 1000, 1),
(14, 111, '2022-12-05', '2022-12-05', 5000, 2),
(15, 111, '2022-12-05', '2022-12-05', 10000, 2),
(16, 111, '2022-12-05', '2022-12-05', 9000, 2),
(17, 111, '2022-12-06', '2022-12-14', 16000, 1),
(18, 111, '2022-12-06', '2022-12-07', 107700, 1),
(19, 1037632160, '2022-12-05', '2022-12-15', 100400, 1),
(20, 1037632160, '2022-12-02', '2022-12-21', 68200, 1),
(21, 1037632160, '2022-12-03', '2022-12-09', 157300, 1),
(22, 1037632160, '2022-12-04', '2022-12-21', 515000, 1),
(23, 1037632160, '2022-12-05', '2022-12-16', 122400, 1),
(24, 111, '2022-12-01', '2022-12-23', 859500, 1),
(25, 1037632160, '2022-12-02', '2022-12-10', 128000, 1),
(26, 111, '2022-12-03', '2022-12-07', 313500, 1),
(27, 111, '2022-11-28', '2022-12-17', 231600, 1),
(28, 111, '2022-11-27', '2022-12-14', 695500, 1),
(29, 1037632160, '2022-11-26', '2022-12-08', 970000, 1),
(30, 111, '2022-11-25', '2022-12-16', 1087500, 1),
(31, 111, '2022-11-23', '2022-12-23', 87700, 1),
(32, 111, '2022-11-17', '2022-12-26', 660000, 1),
(33, 1037632160, '2022-11-23', '2022-12-15', 327500, 1),
(34, 111, '2022-11-29', '2022-12-30', 884000, 1),
(35, 111, '2022-12-06', '2022-12-18', 580000, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `id` int(11) NOT NULL,
  `modulo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `permisos`
--

INSERT INTO `permisos` (`id`, `modulo`) VALUES
(1, 'dashboard'),
(2, 'lista de usuarios'),
(3, 'clientes informativos'),
(4, 'ventas locales'),
(5, 'roles'),
(6, 'permisos'),
(7, 'categorias'),
(8, 'productos'),
(9, 'cotizacion'),
(10, 'pedidos'),
(11, 'pedidos locales');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `precio` float NOT NULL,
  `categoria` int(11) NOT NULL,
  `imagen` varchar(1000) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `categoria`, `imagen`, `estado`) VALUES
(15, 'Empanadas', 2500, 9, 'https://as2.ftcdn.net/v2/jpg/02/62/52/15/1000_F_262521504_PSik8F5PvTiCoxWUs1ZvNwA3J9hpFwyV.jpg', 1),
(16, 'Arepa de huevo', 3500, 9, 'https://as2.ftcdn.net/v2/jpg/05/00/49/57/1000_F_500495742_kJ5PH2L1oIOw98tGNuoAbBNjBAWWnj8V.jpg', 1),
(17, 'Almojábana', 600, 4, 'https://as2.ftcdn.net/v2/jpg/02/41/60/19/1000_F_241601901_DuIdyS9k5mr9cGmICZWIGbOYPrW6rxju.jpg', 1),
(23, 'Buñuelos', 800, 9, 'https://as1.ftcdn.net/v2/jpg/04/67/89/48/1000_F_467894834_OH6j7DhkSbP8U4cEPEcv9lBwIxRFle44.jpg', 1),
(24, 'Palitos de queso', 1500, 4, 'https://as2.ftcdn.net/v2/jpg/04/14/81/33/1000_F_414813378_0Ftni63CVaMvgBKWeIguEx78L2AkXToO.jpg', 1),
(25, 'Panzerotti', 2600, 9, 'https://as1.ftcdn.net/v2/jpg/02/11/01/10/1000_F_211011040_yfRkmobBkJmdN90fjwPjmqSk1i7BnEZb.jpg', 1),
(26, 'Coca Cola ', 2500, 3, 'https://as2.ftcdn.net/v2/jpg/03/89/21/45/1000_F_389214586_3eeM4YOvXfV20q1zlNo1seeiLC5pNRSG.jpg', 1),
(27, 'Pepsi personal', 1800, 3, 'https://as2.ftcdn.net/v2/jpg/05/21/10/85/1000_F_521108525_McaO5nS2LaiQPmUyxhFAeGfB4lZZe9kO.jpg', 1),
(28, 'Jugo de naranja', 3000, 6, 'https://as2.ftcdn.net/v2/jpg/01/87/21/31/1000_F_187213110_p07ufUC42zVlcaijXRuFFYB4MKsWLgq1.jpg', 1),
(29, 'Jugo de mora', 3000, 6, 'https://as1.ftcdn.net/v2/jpg/02/08/56/02/1000_F_208560285_o6MlsTquJ6jwAyaAX87USpItXm4AhoLL.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`, `estado`) VALUES
(1, 'admin', 1),
(4, 'super-admin', 1),
(10, 'Cliente', 1),
(14, 'Secretario', 1),
(15, 'Rol-Prueba', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_permisos`
--

CREATE TABLE `rol_permisos` (
  `id` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `id_permiso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol_permisos`
--

INSERT INTO `rol_permisos` (`id`, `id_rol`, `id_permiso`) VALUES
(15, 1, 1),
(16, 1, 2),
(17, 1, 3),
(18, 1, 4),
(19, 1, 5),
(20, 1, 6),
(21, 4, 1),
(22, 4, 2),
(23, 4, 3),
(24, 4, 4),
(25, 4, 5),
(26, 4, 6),
(27, 4, 7),
(28, 4, 8),
(29, 4, 9),
(30, 4, 10),
(31, 4, 11),
(34, 4, 1),
(36, 13, 1),
(37, 13, 2),
(38, 14, 1),
(39, 14, 7),
(40, 14, 8),
(41, 14, 10),
(42, 15, 2),
(43, 15, 1),
(44, 15, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `id_cliente_documento` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL DEFAULT 3,
  `forgot_token` varchar(500) DEFAULT NULL,
  `img` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `correo`, `contrasena`, `id_cliente_documento`, `id_rol`, `forgot_token`, `img`) VALUES
(5, 'cliente@informativo.com', '$2b$10$ycG5DntLTXYNsSopohzyge9.jIQqqrJYPwjw.p4r2w4NmKz6tdMEa', 111, 4, NULL, NULL),
(6, 'pedro@navaja.com', '$2b$10$3LiAUIg0A7Y9y4yVmtHTcuUUUgvpJvYZcszsiWc.HHzVvunxS5Kzi', 333, 10, NULL, NULL),
(7, 'usuario@user.com', '$2b$10$/S.XO3cB75QoUeU8uHsRsehpbEdPG4.Nlo74J8.FshTBNCbe347We', 444, 2, NULL, NULL),
(9, '999@999.com', '$2b$10$3OKjsjMgksBKsey/3VVxJuBwPoimt5Bp.iCMifuXQqShvL90a29MS', 999, 10, NULL, NULL),
(10, 'nuevo@nuevo.com', '$2b$10$3Iwz.VBMHcFMBtkTZRMt6.YQm8DZbZC2mA8huI/84io8mmtz3tmRy', 888, 10, NULL, NULL),
(11, 'clara_salazar@gmail.com', '$2b$10$PznNyMCGB1TqndO.AdGql.meVyWDlx4SxzlrhbbXkXd89qSc5.8Ga', 123222111, 10, NULL, NULL),
(12, 'juancito@gmail.com', '$2b$10$V8ysX17vRun2vz4FU4g79e3QleRxxQa9ALyzcDds4vLU1pgXsGwDa', 10366954, 1, NULL, NULL),
(13, 'ediccson@gmail.com', '$2b$10$7HGM0EpGvE1HpTbPCN5mQOG2FSugMvWvWkYL0dn44fQRtHfC8izHO', 125146841, 10, NULL, NULL),
(14, 'test3@gmail.com', '$2b$10$fGuxjamHvUhJiSYV26dPbeoS0LyEu1xQV9XOF/Ata.eaN7Re6aBIm', 344323423, 1, NULL, NULL),
(15, 'rojas@rojas.com', '$2b$10$zTwsKLqnLEnKMS/QLMOJXulSFh.oQqkckDbxCFDL6G9PmQ0hYgJRu', 123215556, 10, NULL, NULL),
(16, 'hola@hola.com', '$2b$10$LPkKeOUcoGl6F1um0SAbm.5L2D1NgqyJfX84.9qrylFyFa/Nth22y', 1235423534, 10, NULL, NULL),
(18, 'manual@gmail.com', '$2b$10$Qp0tahKezcgTs/jhPNmpWuziW1SbAVC24GjYcc882vtx50DNrmMAu', 1002006298, 2, NULL, NULL),
(19, 'sdasd@ssda.com', '$2b$10$U/coNQ3Kx8rbKksO5eKCj.Yw9l3LjGc4xsmYQ/bx9gbQxHoFqJ5Gm', 1231232321, 10, NULL, NULL),
(20, 'jsjsj@hmgmg.com', '$2b$10$9lVuo8/CQFr4WqEh2EK7pu77vwIt/jRjs19qjnJVTlzGeZUOSCVmm', 98756789, 10, NULL, NULL),
(21, 'holas@holas.com', '$2b$10$krV.mjp77cVxJ5FTulgnnOyf8KRAiqT9Pk29Rwcse/fDs7fa80q1.', 324123423, 1, NULL, NULL),
(24, 'juandixarteagaperez210@gmail.com', '$2b$10$azeaHJ5ZnUJ3C0/YaSEMz.7ugEp0jr9tF3vk2DbzIf7BBZ2uq57da', 97896745, 4, NULL, 'https://wonder-day.com/wp-content/uploads/2022/03/wonder-day-avatar-memes-cats-70.jpg'),
(26, 'andreammllnaa@gmail.com', '$2b$10$3E56XYMecuxai2VVncuNn.KqOJL0s72ZoPLzNdHnn7KU4Sc/8nxsC', 23211, 10, NULL, NULL),
(33, 'jdarteaga20@misena.edu.co', '$2b$10$yJ6MuDTG8bsKV.Rl9SKXQemE3MwSI0ThjAZ5lXfvXy8DW0HP4enMS', 323423, 10, NULL, 'https://planb.mx/wp-content/uploads/2022/04/FB_IMG_1642304708844-1.jpg'),
(34, 'cmgg7755@gmail.com', '$2b$10$q8E80LeB7SBRxK4JM/pD/.8MSEVAZ6bbnybZZl4qlC0PYIyq2srgK', 103666, 4, NULL, 'https://play-lh.googleusercontent.com/inV5N0eACXXzr9oyPgjiAYApr6YrKvTH68wWTEd3g3gahQkpWac1G_F6ZIFMUfZO94Wg'),
(35, 'carlos.gonzalez076@misena.edu.co', '$2b$10$rA0jygbXzZ5F8FMOpL84XuJSEFr0i/G5TMhRQpqAQePUX7/iLa.eK', 123458963, 4, NULL, 'https://play-lh.googleusercontent.com/inV5N0eACXXzr9oyPgjiAYApr6YrKvTH68wWTEd3g3gahQkpWac1G_F6ZIFMUfZO94Wg'),
(36, 'fdrojas102@misena.edu.co', '$2b$10$6BDwiVVFfNVvithincjI2OnCg9xcFsySfDEl2N76e.lA0UA6uckGS', 123147159, 4, NULL, NULL),
(37, 'jefersson.pea@misena.edu.co', '$2b$10$cTwlC2fqrtRlEfWiTCii.edyeiiibXQ8YKet5Vr9Zb0AlYu18REQC', 1037632160, 4, NULL, 'https://lh3.googleusercontent.com/a/AEdFTp5zEFRw0xC9DsEoqzTrlhVCQKcHNGI5_CcQiWLM=s96-c'),
(38, 'danisuarez@gmail.com', '$2b$10$pB91n9GezvRus/Lp9xeqlOQu2RtqkbtYxrNHbF/OcXNolUCZOR/Pq', 7892263, 4, NULL, NULL),
(39, 'llsandoval7@misena.edu.co', '$2b$10$LmKG.QaKFTZlvnyR4sTmsO2z/p.5NQIx7t3H/EfaJIPHYmwokM3rm', 1000000, 4, NULL, 'https://lh3.googleusercontent.com/a/AEdFTp5f6_xtsZHM0NG6tZUsQjKARm2KkRaxd9b5T6Vw=s96-c');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta_local`
--

CREATE TABLE `venta_local` (
  `id_venta` int(11) NOT NULL,
  `id_cliente_documento` int(11) NOT NULL,
  `fecha_registro` date NOT NULL,
  `precio_total` float NOT NULL,
  `estado` int(11) NOT NULL COMMENT '0: inactivo,\r\n1: activo,\r\n2: abonado'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `venta_local`
--

INSERT INTO `venta_local` (`id_venta`, `id_cliente_documento`, `fecha_registro`, `precio_total`, `estado`) VALUES
(10, 1313, '2022-09-28', 600000, 1),
(11, 2147483647, '2022-09-28', 1300000, 1),
(12, 888, '2022-09-28', 480000, 1),
(13, 8888888, '2022-09-28', 660000, 1),
(14, 777, '2022-09-28', 900000, 1),
(15, 1112221, '2022-09-28', 154000, 1),
(16, 123123, '2022-10-04', 2000, 0),
(17, 223, '2022-10-10', 121000, 0),
(18, 111, '2022-10-13', 77000, 0),
(19, 111, '2022-10-13', 157000, 0),
(20, 5234234, '2022-10-18', 20000, 1),
(21, 12412312, '2022-10-18', 25000, 1),
(22, 7869987, '2022-10-18', 87500, 1),
(23, 546345, '2022-10-18', 119000, 1),
(24, 65356768, '2022-10-18', 307500, 1),
(25, 8675342, '2022-10-18', 87500, 1),
(26, 111, '2022-10-18', 62500, 0),
(27, 63456345, '2022-10-18', 4534000, 2),
(28, 111, '2022-10-31', 62500, 1),
(29, 534534, '2022-10-31', 30000, 1),
(30, 3453423, '2022-10-31', 50000, 2),
(31, 1231323, '2022-10-31', 62500, 1),
(32, 45345234, '2022-11-14', 62500, 2),
(33, 32412313, '2022-11-15', 125000, 1),
(34, 111, '2022-12-03', 7000, 2),
(35, 111, '2022-12-03', 2000, 2),
(36, 111, '2022-12-03', 7000, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `abono`
--
ALTER TABLE `abono`
  ADD PRIMARY KEY (`id_abono`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes_informativos`
--
ALTER TABLE `clientes_informativos`
  ADD PRIMARY KEY (`id_cliente_documento`);

--
-- Indices de la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  ADD PRIMARY KEY (`id_detalle_pedido`);

--
-- Indices de la tabla `detalle_pedido_local`
--
ALTER TABLE `detalle_pedido_local`
  ADD PRIMARY KEY (`id_detalle_pedido_local`);

--
-- Indices de la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  ADD PRIMARY KEY (`id_detalle_venta`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`);

--
-- Indices de la tabla `pedido_local`
--
ALTER TABLE `pedido_local`
  ADD PRIMARY KEY (`id_pedido_local`);

--
-- Indices de la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rol_permisos`
--
ALTER TABLE `rol_permisos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indices de la tabla `venta_local`
--
ALTER TABLE `venta_local`
  ADD PRIMARY KEY (`id_venta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `abono`
--
ALTER TABLE `abono`
  MODIFY `id_abono` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `clientes_informativos`
--
ALTER TABLE `clientes_informativos`
  MODIFY `id_cliente_documento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2147483648;

--
-- AUTO_INCREMENT de la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  MODIFY `id_detalle_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT de la tabla `detalle_pedido_local`
--
ALTER TABLE `detalle_pedido_local`
  MODIFY `id_detalle_pedido_local` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT de la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  MODIFY `id_detalle_venta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT de la tabla `pedido_local`
--
ALTER TABLE `pedido_local`
  MODIFY `id_pedido_local` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `permisos`
--
ALTER TABLE `permisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `rol_permisos`
--
ALTER TABLE `rol_permisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de la tabla `venta_local`
--
ALTER TABLE `venta_local`
  MODIFY `id_venta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
