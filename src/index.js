const { response } = require("express");
const express = require("express"); // import express
const app = express(); // create express app

app.set("port", process.env.PORT || 3000); // set the port

app.use(express.json()); // for parsing application/json

app.listen(app.get("port"), () => {
  console.log("server en tu puertito", app.get("port"));
});//poner en el puerto 3000


//estas son las ruticas
app.use(require("./routes/initialPage"));

app.use(require("./routes/users"));