-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-10-2022 a las 02:45:03
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
(5, 'Arepas', 0),
(6, 'Parva', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes_informativos`
--

CREATE TABLE `clientes_informativos` (
  `id_cliente_documento` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `apellido` varchar(300) NOT NULL,
  `telefono` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes_informativos`
--

INSERT INTO `clientes_informativos` (`id_cliente_documento`, `nombre`, `apellido`, `telefono`) VALUES
(111, 'Cliente', 'Informativo', 1111),
(222, 'Juanito', 'Alimaña', 3123),
(333, 'Pedro', 'Navaja', 333),
(444, 'Otro', 'Usuario', 444),
(888, 'updated', 'user', 111),
(999, '999', '999', 999),
(123123, '12312', '123123', 123123);

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
(61, 15, 53, 10, 3500);

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
(20, 14, 16, 1, 2000);

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
(53, 123123, 'cotizacion', '2022-10-05', 55000, 1, '2022-09-17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `modulo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `permisos`
--

INSERT INTO `permisos` (`id`, `nombre`, `modulo`) VALUES
(2, 'Editar Cocacola', 'Usuarios'),
(3, 'Crear Usuario', 'Usuarios'),
(4, 'Crear venta', 'Ventas'),
(5, 'Editar pedido', 'Pedidos'),
(6, 'Crear Pedido', 'Pedidos'),
(8, 'Editar Venta', 'Ventas');

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
(12, 'Pan de leche', 300, 4, 'https://cdn-icons-png.flaticon.com/512/883/883561.png', 1),
(14, 'Coca Cola', 2000, 3, 'https://cdn-icons-png.flaticon.com/512/2405/2405447.png', 1),
(15, 'Arepa de huevo', 3500, 5, 'https://cdn-icons-png.flaticon.com/512/6724/6724574.png', 1),
(16, 'Buñuelos', 1000, 6, 'https://cdn-icons-png.flaticon.com/512/6313/6313568.png', 1);

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
(3, 'cliente', 1),
(4, 'secretaria', 1),
(5, 'dvzdv', 1),
(6, 'otroRol', 1);

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
(1, 1, 2),
(2, 4, 4),
(3, 3, 5),
(4, 3, 4),
(5, 4, 2),
(6, 6, 3),
(7, 6, 4),
(8, 6, 8),
(9, 6, 6),
(10, 6, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `id_cliente_documento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `correo`, `contrasena`, `id_cliente_documento`) VALUES
(5, 'juan@juan.com', '$2b$10$aGihf4cnIrb4D2CB0lerauC4Hge2fOLx62JWrI68U6wOWhzmUwn2S', 111),
(6, 'pedro@navaja.com', '$2b$10$3LiAUIg0A7Y9y4yVmtHTcuUUUgvpJvYZcszsiWc.HHzVvunxS5Kzi', 333),
(7, 'usuario@user.com', '$2b$10$/S.XO3cB75QoUeU8uHsRsehpbEdPG4.Nlo74J8.FshTBNCbe347We', 444),
(8, 'email@email.com', '$2b$10$y9aD4WpGdfy7A7Kjy3rt6./0DBOLi7F2gPGJF/wkYlRRTVlxVey3.', 123123),
(9, '999@999.com', '$2b$10$3OKjsjMgksBKsey/3VVxJuBwPoimt5Bp.iCMifuXQqShvL90a29MS', 999),
(10, 'nuevo@nuevo.com', '$2b$10$3Iwz.VBMHcFMBtkTZRMt6.YQm8DZbZC2mA8huI/84io8mmtz3tmRy', 888);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta_local`
--

CREATE TABLE `venta_local` (
  `id_venta` int(11) NOT NULL,
  `id_cliente_documento` int(11) NOT NULL,
  `fecha_registro` date NOT NULL,
  `precio_total` float NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `venta_local`
--

INSERT INTO `venta_local` (`id_venta`, `id_cliente_documento`, `fecha_registro`, `precio_total`, `estado`) VALUES
(10, 1313, '2022-09-28', 600000, 1),
(11, 2147483647, '2022-09-28', 1300000, 1),
(12, 888, '2022-09-28', 480000, 1),
(13, 8888888, '2022-09-28', 660000, 0),
(14, 777, '2022-09-28', 900000, 0),
(15, 1112221, '2022-09-28', 154000, 0),
(16, 123123, '2022-10-04', 2000, 1);

--
-- Índices para tablas volcadas
--

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
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `clientes_informativos`
--
ALTER TABLE `clientes_informativos`
  MODIFY `id_cliente_documento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2147483648;

--
-- AUTO_INCREMENT de la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  MODIFY `id_detalle_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT de la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  MODIFY `id_detalle_venta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT de la tabla `permisos`
--
ALTER TABLE `permisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `rol_permisos`
--
ALTER TABLE `rol_permisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `venta_local`
--
ALTER TABLE `venta_local`
  MODIFY `id_venta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
