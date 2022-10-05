const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../conexion");
const bcryptjs = require("bcrypt");

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

//? editData
router.put("/usuario/:id_cliente_documento", (req, res) => {
  const { correo, contrasena } = req.body;
  const { id_cliente_documento } = req.params;
  mySqlConnection.query(
    "UPDATE usuario SET correo = ?, contrasena = ? WHERE id_cliente_documento = ?",
    [correo, bcryptjs.hashSync(contrasena, 10), id_cliente_documento],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Usuario actualizado" });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
