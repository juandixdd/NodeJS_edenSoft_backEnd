const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../conexion");
const bcryptjs = require("bcrypt");

//? Get
router.get("/usuario", (req, res) => {
  const query =
    "select u.*, ci.*, r.nombre as 'rol', concat(ci.nombre, ' ', ci.apellido) as 'nombre_completo' from usuario u join clientes_informativos ci on ci.id_cliente_documento = u.id_cliente_documento join roles r on r.id = u.id_rol";
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

//? Get by email
router.get("/usuario/email/:correo", (req, res) => {
  const { correo } = req.params;
  query = "select * from usuario where correo = ?";
  mySqlConnection.query(query, [correo], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? editProfile
router.put("/editProfile/:id_cliente_documento", (req, res) => {
  const { nombre, apellido, telefono } = req.body;
  const { id_cliente_documento } = req.params;
  mySqlConnection.query(
    "UPDATE clientes_informativos SET nombre = ?, apellido=?, telefono=? WHERE id_cliente_documento = ?",
    [nombre, apellido, telefono, id_cliente_documento],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: 200, message: "Se actualizo tu perfil" });
      } else {
        console.log(err);
      }
    }
  );
});

//? editData
router.put("/usuario/:id_cliente_documento", (req, res) => {
  const { id_rol } = req.body;
  const { id_cliente_documento } = req.params;
  mySqlConnection.query(
    "UPDATE usuario SET id_rol = ? WHERE id_cliente_documento = ?",
    [id_rol, id_cliente_documento],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Usuario actualizado" });
      } else {
        console.log(err);
      }
    }
  );
});

//? Get permisos by usuario id
router.get("/usuario/permisos/:id", (req, res) => {
  const { id } = req.params;
  query = `
select
	u.id_usuario,
	u.correo,
	u.id_cliente_documento,
	u.id_rol,
	r.nombre as 'rol',
	p.modulo as 'modulo',
	p.id as 'modulo_id'
from
	usuario u
join roles r on r.id = u.id_rol
join rol_permisos rp on rp.id_rol = r.id
join permisos p on p.id = rp.id_permiso 
where
	u.id_cliente_documento = ?
  `;
  mySqlConnection.query(query, [id], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
