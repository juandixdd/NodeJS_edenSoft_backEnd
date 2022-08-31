const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../../conexion");

//? Traer todos los rol_permisos =====================================================================================
router.get("/rol-permisos", (req, res) => {
    const query =
      "select * from rol_permisos";
    mySqlConnection.query(query, (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });

  //? Traer a un permisos por id =====================================================================================
router.get("/rol-permisos/:id", (req, res) => {
    const { id } = req.params;
    mySqlConnection.query(
      "SELECT * FROM rol_permisos WHERE id = ?",
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
router.post("/rol-permisos", (req, res) => {
    //* Se define función para creación del rol_permisos
    function createRolPermisos() {
      const { id_rol, id_permiso} = req.body;
      mySqlConnection.query(
        "INSERT INTO rol_permisos (id_rol, id_permiso ) VALUES (?,?)",
        [id_rol, id_permiso],
        (err, rows, fields) => {
          if (!err) {
            res.json({ status: "Rol_Permiso creado", statusCode: 200 });
          } else {
            console.log(err);
          }
        }
      );
    }
  
    createRolPermisos();
  });

  //?Editar un producto =====================================================================================
router.put("/rol-permisos/:id", (req, res) => {
    const { id_rol, id_permiso} = req.body;
    const { id } = req.params;
    mySqlConnection.query(
      "UPDATE rol_permisos SET id_rol=?, id_permiso = ?  WHERE id = ?",
      [id_rol, id_permiso, id],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: "rol_Permiso actualizado" });
        } else {
          console.log(err);
        }
      }
    );
  });

  //?Eliminar un Permiso =====================================================================================
router.delete("/rol-permisos/:id", (req, res) => {
    const { id } = req.params;
    mySqlConnection.query(
      "DELETE FROM rol_permisos WHERE id = ?",
      [id],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: "rol_Permiso eliminado" });
        } else {
          console.log(err);
        }
      }
    );
  });






module.exports = router;