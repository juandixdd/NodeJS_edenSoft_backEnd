const express = require("express");
const router = express.Router();
const mySqlConnection = require("../conexion");

//?fincion para llamar todos los users
router.get("/users", (req, res) => {
  mySqlConnection.query("SELECT * FROM users", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//?funcion para llamar 1 usuario
router.get("/users/:id", (req, res) => {
  mySqlConnection.query(
    "SELECT * FROM users WHERE id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

//? Craer un usuario
router.post("/users", (req, res) => {
  const {id,name,last_name,email,password,adress,phone} = req.body;
  mySqlConnection.query(
    "INSERT INTO users (id,name,last_name,email,password,adress,phone) VALUES (?,?,?,?,?,?,?)",
    [id,name,last_name,email,password,adress,phone],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Usuario creado" });
      } else {
        console.log(err);
      }
    }
  );
});

//?Editar un usuario
router.put("/users/:id", (req, res) => {
  const{name,last_name,email,password,adress,phone} = req.body;
  const { id } = req.params;
  mySqlConnection.query(
    "UPDATE users SET name = ?, last_name = ?, email = ?, password = ?, adress = ?, phone = ? WHERE id = ?",
    [name,last_name,email,password,adress,phone,id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Usuario actualizado" });
      } else {
        console.log(err);
      }
    }
  );
});

//?Eliminar un usuario
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  mySqlConnection.query(
    "DELETE FROM users WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Usuario eliminado" });
      } else {
        console.log(err);
      }
    }
  );
});
module.exports = router;
