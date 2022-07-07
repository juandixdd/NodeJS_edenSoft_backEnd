const mysql = require("mysql");

const mySqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "eden_db",
});

mySqlConnection.connect(function (err) {
  if (err) {
    console.log(err);
    console.log("Error de conexión a la base de datos")
    return;
  } else {
    console.log("conectado");
  }
});

module.exports = mySqlConnection; //super importante poner esto porque si no paila la app

/* 
Para localhost:
  host: "localhost",
  user: "root",
  password: "",
  database: "eden_db",
*/

/* 
Para Heroku
  host: "us-cdbr-east-06.cleardb.net",
  user: "b7dfa1544b4b63",
  password: "517fd6e3",
  database: "heroku_f617d10bfa57c7c",
*/

/* 
Para ver la db desplegada en heroku
  heroku config --app eden-db
*/
