-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-10-2022 a las 17:46:53
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

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
  `valor` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `abono`
--

INSERT INTO `abono` (`id_abono`, `id_venta_local`, `id_pedido_local`, `valor`) VALUES
(1, 19, NULL, 25000),
(2, 19, NULL, 25000),
(3, 25, NULL, 65625),
(4, 26, NULL, 31250);

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
(111, 'Daniel', 'el lindo', 8885),
(222, 'Juanito', 'Alimaña', 3123),
(223, 'Daniel', 'guzman', 45321884),
(333, 'Pedro', 'Navaja', 333),
(444, 'Otro', 'Usuario', 444),
(888, 'updated', 'user', 111),
(999, 'Josesito', 'Vegano', 310002022),
(7789, 'test', 'test', 3321225),
(123123, 'Ricardo', '3333221', 123123),
(546345, '12312343', '356354', 53445),
(5234234, '123', '123', 123),
(7869987, '13123123', '1231', 123123),
(8675342, '13212', '234234', 2353465),
(10366954, 'juan Atonio', 'Correa', 4566658),
(12412312, '123123', '12323123', 123123),
(45654898, 'test', 'test', 3321225),
(63456345, '12312', '23423', 23423),
(65356768, '123123', '2343', 3431),
(123215556, 'Daniela ', 'Rojas', 2147483647),
(123222111, 'qweqw', 'qweqwe', 332122),
(125146841, 'Ediccson', 'Quiroz', 45613216),
(344323423, 'cualqucsdc', 'dasdasd', 3444323),
(2147483647, 'Clara', 'Salazar', 555);

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
(72, 16, 63, 33, 1000);

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
(33, 16, 27, 4534, 1000);

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
(57, 125146841, 'pedido', '2022-10-10', 33000, 0, '2022-10-31'),
(58, 125146841, 'pedido', '2022-10-10', 33000, 1, '2022-10-31'),
(59, 125146841, 'pedido', '2022-10-10', 33000, 1, '2022-10-31'),
(60, 125146841, 'pedido', '2022-10-10', 33000, 1, '2022-10-31'),
(61, 125146841, 'pedido', '2022-10-10', 33000, 1, '2022-10-31'),
(62, 125146841, 'pedido', '2022-10-10', 33000, 1, '2022-10-31'),
(63, 125146841, 'pedido', '2022-10-10', 33000, 1, '2022-10-31');

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
(15, 'Arepa de huevo', 3500, 5, 'https://cdn-icons-png.flaticon.com/512/6724/6724574.png', 1),
(16, 'Buñuelos', 1000, 6, 'https://cdn-icons-png.flaticon.com/512/6313/6313568.png', 1),
(17, 'pandequeso', 2500, 4, 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFRUYGBgaGBoaGBgYFRoYGBgYGRgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA5EAABAwIEAwYFAgUEAwAAAAABAAIRAwQSITFBBVFhBiJxgZGhEzKxwdFC8BRScuHxFSOCkgckU//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACQRAAMAAgMBAAIDAAMAAAAAAAABAgMREiExQQRREyJhFDKx/9oADAMBAAIRAxEAPwDQApSosS78REXRKCuyoca78RYJNK6CoPiJCots2giUi+FB8VA3t3AQqklsaYdPSH39/hEBUFauXHVR3FxJUHxF5+XI6Z7f4+BY5/0lCdjAVfcX4Z1PIaoXE58uLiMpawakaKan6yt5lPRcurNGpUJvm7ZnkM0+z4SS2X90ahrRLz/Udlc23Cg0ZMDfKTnzKVtEazsz/wAZ7hLWGOo/C4GVSAYMknIRMRlOa1AsBunfwjZ0C26/RF52/pnaLHAjGS3niBMx/KAi6NNzjkCBvI1HMFWz7SQROvt4IQUCxoOKYkZ9TIk7BJXIacu/owUZyGsTG/j1XadLPNS134XM2BAMk7qzFrj/AKufNGa77HvNXHoEo0+SKdTMJ1NkZHIjVEtcANEzORUQWPD2OYH1cUmYbpEEjQao1/CaTmyGH1IStmtcW5xh0H1VvIDeSMrkCqa+mNvuBgZscZnRwn3Gip7ik5hwvaRyJ0Pgd1triq1xgablAXFqHNLfmB1afsdih2i2PO0ZUFEW9', 1);

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
(6, 'otroRol', 1),
(7, 'Admin2', 1);

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
(10, 6, 5),
(11, 7, 4),
(12, 7, 6),
(13, 7, 8),
(14, 7, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `id_cliente_documento` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL DEFAULT 3
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `correo`, `contrasena`, `id_cliente_documento`, `id_rol`) VALUES
(5, 'pedriiit@navaja.com', '$2b$10$ycG5DntLTXYNsSopohzyge9.jIQqqrJYPwjw.p4r2w4NmKz6tdMEa', 111, 1),
(6, 'pedro@navaja.com', '$2b$10$3LiAUIg0A7Y9y4yVmtHTcuUUUgvpJvYZcszsiWc.HHzVvunxS5Kzi', 333, 3),
(7, 'usuario@user.com', '$2b$10$/S.XO3cB75QoUeU8uHsRsehpbEdPG4.Nlo74J8.FshTBNCbe347We', 444, 7),
(8, 'email@email.com', '$2b$10$y9aD4WpGdfy7A7Kjy3rt6./0DBOLi7F2gPGJF/wkYlRRTVlxVey3.', 123123, 3),
(9, '999@999.com', '$2b$10$3OKjsjMgksBKsey/3VVxJuBwPoimt5Bp.iCMifuXQqShvL90a29MS', 999, 3),
(10, 'nuevo@nuevo.com', '$2b$10$3Iwz.VBMHcFMBtkTZRMt6.YQm8DZbZC2mA8huI/84io8mmtz3tmRy', 888, 3),
(11, 'clara_salazar@gmail.com', '$2b$10$PznNyMCGB1TqndO.AdGql.meVyWDlx4SxzlrhbbXkXd89qSc5.8Ga', 123222111, 3),
(12, 'juancito@gmail.com', '$2b$10$V8ysX17vRun2vz4FU4g79e3QleRxxQa9ALyzcDds4vLU1pgXsGwDa', 10366954, 1),
(13, 'ediccson@gmail.com', '$2b$10$7HGM0EpGvE1HpTbPCN5mQOG2FSugMvWvWkYL0dn44fQRtHfC8izHO', 125146841, 3),
(14, 'test3@gmail.com', '$2b$10$fGuxjamHvUhJiSYV26dPbeoS0LyEu1xQV9XOF/Ata.eaN7Re6aBIm', 344323423, 1),
(15, 'rojas@rojas.com', '$2b$10$zTwsKLqnLEnKMS/QLMOJXulSFh.oQqkckDbxCFDL6G9PmQ0hYgJRu', 123215556, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta_local`
--

CREATE TABLE `venta_local` (
  `id_venta` int(11) NOT NULL,
  `id_cliente_documento` int(11) NOT NULL,
  `fecha_registro` date NOT NULL,
  `precio_total` float NOT NULL,
  `estado` int(11) NOT NULL,
  `pagado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `venta_local`
--

INSERT INTO `venta_local` (`id_venta`, `id_cliente_documento`, `fecha_registro`, `precio_total`, `estado`, `pagado`) VALUES
(10, 1313, '2022-09-28', 600000, 1, 1),
(11, 2147483647, '2022-09-28', 1300000, 1, 1),
(12, 888, '2022-09-28', 480000, 1, 1),
(13, 8888888, '2022-09-28', 660000, 1, 1),
(14, 777, '2022-09-28', 900000, 1, 1),
(15, 1112221, '2022-09-28', 154000, 1, 1),
(16, 123123, '2022-10-04', 2000, 0, 1),
(17, 223, '2022-10-10', 121000, 0, 1),
(18, 111, '2022-10-13', 77000, 0, 1),
(19, 111, '2022-10-13', 157000, 0, 1),
(20, 5234234, '2022-10-18', 20000, 1, 1),
(21, 12412312, '2022-10-18', 25000, 1, 1),
(22, 7869987, '2022-10-18', 87500, 1, 1),
(23, 546345, '2022-10-18', 119000, 1, 1),
(24, 65356768, '2022-10-18', 307500, 1, 1),
(25, 8675342, '2022-10-18', 87500, 1, 1),
(26, 111, '2022-10-18', 62500, 1, 1),
(27, 63456345, '2022-10-18', 4534000, 1, 1);

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
-- AUTO_INCREMENT de la tabla `abono`
--
ALTER TABLE `abono`
  MODIFY `id_abono` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  MODIFY `id_detalle_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT de la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  MODIFY `id_detalle_venta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT de la tabla `permisos`
--
ALTER TABLE `permisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `rol_permisos`
--
ALTER TABLE `rol_permisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `venta_local`
--
ALTER TABLE `venta_local`
  MODIFY `id_venta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
