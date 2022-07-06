const { response } = require("express");
const express = require("express"); // import express
const app = express(); // create express app
const cors = require('cors');

app.set("port", process.env.PORT || 3000); // set the port
const whiteList = ['http://localhost:4200'];

app.use(express.json()); // for parsing application/json

app.use(cors({
  origin: whiteList
}));

app.listen(app.get("port"), () => {
  console.log("server en tu puertito", app.get("port"));
});//poner en el puerto 3000


//estas son las ruticas
app.use(require("./routes/initialPage"));

app.use(require("./routes/users"));