const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../../conexion");

//? Traer todos los permisos =====================================================================================
router.get("/permisos", (req, res) => {
  const query = "select * from permisos";
  mySqlConnection.query(query, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Traer a un permisos por id =====================================================================================
router.get("/permisos/:id", (req, res) => {
  const { id } = req.params;
  mySqlConnection.query(
    "SELECT * FROM permisos WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

//? Crear un permiso ============================================================================
router.post("/permisos", (req, res) => {
  //* Se define función para creación del permisos
  function createPermisos() {
    const { nombre } = req.body;
    mySqlConnection.query(
      "INSERT INTO permisos (nombre) VALUES (?)",
      [nombre],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: "Permiso creado", statusCode: 200 });
        } else {
          console.log(err);
        }
      }
    );
  }

  createPermisos();
});

//?Editar un producto =====================================================================================
router.put("/permisos/:id", (req, res) => {
  const { nombre } = req.body;
  const { id } = req.params;
  mySqlConnection.query(
    "UPDATE permisos SET nombre = ?  WHERE id = ?",
    [nombre, id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Permiso actualizado" });
      } else {
        console.log(err);
      }
    }
  );
});

//?Eliminar un Permiso =====================================================================================
router.delete("/permisos/:id", (req, res) => {
  const { id } = req.params;
  mySqlConnection.query(
    "DELETE FROM permisos WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Permiso eliminado" });
      } else {
        console.log(err);
      }
    }
  );
});

/* 
  
  select p.*, r.nombre  from permisos p
join rol_permisos rp on rp.id_permiso = p.id 
join roles r on r.id = rp.id_rol
  
  */

module.exports = router;
