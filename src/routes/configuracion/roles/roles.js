const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../../conexion");

//? Traer todos los roles =====================================================================================
router.get("/roles", (req, res) => {
  const query = "select * from roles";
  mySqlConnection.query(query, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Traer a un rol por id =====================================================================================
router.get("/roles/:id", (req, res) => {
  const { id } = req.params;
  query = "SELECT * FROM roles WHERE id = ?";
  mySqlConnection.query(query, [id], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Crear un rol ============================================================================
router.post("/roles", (req, res) => {
  function createRol() {
    const { nombre, estado } = req.body;
    mySqlConnection.query(
      "INSERT INTO roles (nombre,estado) VALUES (?,?)",
      [nombre, estado],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: "rol creado", statusCode: 200 });
        } else {
          console.log(err);
        }
      }
    );
  }

  createRol();
});

//?Editar un rol =====================================================================================
router.put("/roles/:id", (req, res) => {
  const { nombre,estado } = req.body;
  const { id } = req.params;
  mySqlConnection.query(
    "UPDATE roles SET nombre = ?, estado = ? WHERE id = ?",
    [nombre,estado, id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "rol actualizado" });
      } else {
        console.log(err);
      }
    }
  );
});

//?Eliminar un Rol =====================================================================================
router.delete("/roles/:id", (req, res) => {
    const { id } = req.params;
    mySqlConnection.query(
      "DELETE FROM roles WHERE id = ?",
      [id],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: "Rol eliminado" });
        } else {
          console.log(err);
        }
      }
    );
  });

module.exports = router;
