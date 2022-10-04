const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../conexion");

//? Get
router.get("/usuario", (req, res) => {
  const query =
    "select u.*, ci.*, concat(ci.nombre, ' ', ci.apellido) as 'nombre_completo' from usuario u join clientes_informativos ci on ci.id_cliente_documento = u.id_cliente_documento";
  mySqlConnection.query(query, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Get by id
router.get("/usuario/:id", (req, res) => {
  const { id } = req.params;
  query =
    "select u.*, ci.* from usuario u join clientes_informativos ci on ci.id_cliente_documento = u.id_cliente_documento where ci.id_cliente_documento = ?";
  mySqlConnection.query(query, [id], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
