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
  console.log("*****************************************");
  console.log("Servidor establecido en el puerto:", app.get("port"));
}); //poner en el puerto 3000

//estas son las rutas para hacer uso de cada una de las tablas
//? Página inicial
app.use(require("./routes/initialPage"));

//? Autentificación
app.use(require("./routes/auth/register"));
app.use(require("./routes/auth/login"));

//? usuarios
app.use(require("./routes/users/users"));

//! RECUERDEN SEPARAR ESTAS RUTAS POR MÓDULO, PONGANLE EL COMENTARIO PARA EL MÓDULO Y DESPUES LAS RUTAS