const { response } = require("express");
const express = require("express"); // import express
const app = express(); // create express app
const cors = require("cors");

app.set("port", process.env.PORT || 3000); // set the port
const whiteList = ["http://localhost:4200"];

app.use(express.json()); // for parsing application/json

app.use(
  cors({
    origin: whiteList,
  })
);

app.listen(app.get("port"), () => {
  console.log("")
  console.log("")
  console.log("*****************************************************");
  console.log("*   🖥️  Servidor establecido en el puerto:", app.get("port") , "🖥️   *");
}); //poner en el puerto 3000

//estas son las rutas para hacer uso de cada una de las tablas
//? Página inicial
app.use(require("./routes/initialPage"));

//? Autentificación
app.use(require("./routes/auth/register"));
app.use(require("./routes/auth/login"));

//? Configuracion
app.use(require("./routes/configuracion/permisos/permisos"));
app.use(require("./routes/configuracion/rol_permisos/rol_permisos"));
app.use(require("./routes/configuracion/roles/roles"));


//? usuarios
app.use(require("./routes/users/users"));

//? productos
app.use(require("./routes/productos/productos/productos"))

//? categorias
app.use(require("./routes/productos/categorias/categorias"))

//? pedidos
app.use(require("./routes/pedidos/pedidos/pedidos"))
app.use(require("./routes/pedidos/detalle_pedido/detalle_pedido"))

//? Clientes informativos
app.use(require("./routes/ventas/clientes_informativos/clientes_informativos"))

//? Ventas locales
app.use(require("./routes/ventas/venta_local/venta_local"))

//! RECUERDEN SEPARAR ESTAS RUTAS POR MÓDULO, PONGANLE EL COMENTARIO PARA EL MÓDULO Y DESPUES LAS RUTAS