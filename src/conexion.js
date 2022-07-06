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
    return;
  }else{
    console.log("conectado");
  }
});

module.exports = mySqlConnection; //super importante poner esto porque si no paila la app
