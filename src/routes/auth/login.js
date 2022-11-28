const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../conexion");
const bcryptjs = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/auth/login", async (req, res) => {
  function compare(correo, contrasena, userRegistered) {
    let compare = bcryptjs.compareSync(
      contrasena,
      userRegistered[0].contrasena
    );
    if (compare) {
      jwt.sign(
        {
          correo: correo,
          contrasena: userRegistered[0].contrasena,
        },
        "secretkey",
        (err, token) => {
          res.json({
            status: "Login exitoso",
            statusCode: 200,
            userId: userRegistered[0].id_cliente_documento,
            estado:userRegistered[0].estado,
            token: token,
          });
        }
      );
    } else {
      res.json({
        status: "Credenciales incorrectas",
        statusCode: 403,
      });
    }
  }

  const { correo, contrasena } = req.body;
  mySqlConnection.query(
    "SELECT s.*, ci.estado  FROM usuario s join clientes_informativos ci on s.id_cliente_documento = ci.id_cliente_documento  WHERE correo = ?",
    [correo],
    (err, rows, fields) => {
      if (!err) {
        if (rows.length >= 1) {
          compare(correo, contrasena, rows);
        } else {
          res.json({
            status: "No se encuentra ningún usuario registrado con ese correo",
            statusCode: 403,
          });
        }
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
