const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../../conexion");

//? Traer todos los roles =====================================================================================
router.get("/roles", (req, res) => {
  const query =
    "select r.id, r.nombre as 'rol',if(r.estado=0,'inactivo','activo') as nombre_estado, r.estado, group_concat(p.nombre separator ', ') as 'permiso' from roles r join rol_permisos rp on r.id = rp.id_rol join permisos p on p.id = rp.id_permiso group by rol";
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
  query = "select r.id, r.nombre as 'rol', r.estado, group_concat(p.nombre separator ', ')  as 'permiso' from roles r  join rol_permisos rp on r.id = rp.id_rol  join permisos p on p.id = rp.id_permiso where r.id =? group by rol ";
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
      "INSERT INTO roles (nombre,estado) VALUES (?,1)",
      [nombre, estado],
      (err, rows, fields) => {
        if (!err) {
          res.json({
            status: "rol creado",
            statusCode: 200,
            idRol: rows.insertId
          });
        } else {
          console.log(err);
        }
      }
    );
  }

  createRol();
});

//?anular un rol =====================================================================================
router.put("/anula-rol/:id", (req, res) => {
  const {estado } = req.body;
  const { id } = req.params;
  mySqlConnection.query(
    "UPDATE roles SET estado = ? WHERE id = ?",
    [estado, id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ 
          status:200, 
          message:"rol actualizado" 
        });
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
