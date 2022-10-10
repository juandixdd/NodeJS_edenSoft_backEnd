const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../conexion");
const bcryptjs = require("bcrypt");

//? Crear un usuario =====================================================================================
router.post("/register", (req, res) => {
  //* Si no hay usuarios registrados con el id, lo deja crear
  const { correo } = req.body;
  mySqlConnection.query(
    "SELECT * FROM usuario WHERE correo = ?",
    [correo],
    (err, rows, fields) => {
      if (!err) {
        if (rows.length >= 1) {
          res.json({
            status: "Ya hay un usuario registrado con ese correo",
            statusCode: 403,
          });
        } else {
          //* Si no hay usuarios registrados con el correo, lo deja crear
          registerUser();
        }
      } else {
        console.log(err);
      }
    }
  );

  const registerUser = () => {
    const { correo, contrasena, id_cliente_documento, id_rol } = req.body;
    const hash = bcryptjs.hashSync(contrasena, 10);
    const query =
      "INSERT INTO usuario (correo, contrasena, id_cliente_documento, id_rol) VALUES (?,?,?,?)";
    mySqlConnection.query(
      query,
      [correo, hash, id_cliente_documento, id_rol],
      (err, rows, fields) => {
        if (!err) {
          res.json({ 
            status: 200, 
            message: "Usuario registrado" });
        } else {
          console.log(err);
        }
      }
    );
  };
});

//? get user by email
router.get("/register/:email", (req, res) => {
  const { email } = req.params;
  mySqlConnection.query(
    "SELECT * FROM usuario WHERE correo = ?",
    [email],
    (err, rows, fields) => {
      if (!err) {
        if (rows.length === 0) {
          res.send({
            exists: false,
          });
        } else {
          res.send({
            exists: true,
            data: rows,
          });
        }
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
