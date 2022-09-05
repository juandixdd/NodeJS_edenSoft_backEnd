const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../../conexion");

//? Traer todos los categorias =====================================================================================
router.get("/categoria", (req, res) => {
  mySqlConnection.query("SELECT * FROM categorias", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Traer a un categoria por id =====================================================================================
router.get("/categoria/:id", (req, res) => {
  const { id } = req.params;
  mySqlConnection.query(
    "SELECT * FROM categorias WHERE id = ?",
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

//? Crear un categoriaa ============================================================================
router.post("/categoria", (req, res) => {
  //* Se define función para creación del usuario
  function createProduct() {
    const { nombre, estado } = req.body;
    mySqlConnection.query(
      "INSERT INTO categorias (nombre,estado) VALUES (?,?)",
      [nombre, estado],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: "categoria creada", statusCode: 200 });
        } else {
          console.log(err);
        }
      }
    );
  }

  createProduct();
});

//?Editar un producto =====================================================================================
router.put("/categoria/:id", (req, res) => {
  const { nombre, estado } = req.body;
  const { id } = req.params;
  mySqlConnection.query(
    "UPDATE categorias SET nombre = ?, estado = ? WHERE id = ?",
    [nombre, estado, id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Categoria actualizada" });
      } else {
        console.log(err);
      }
    }
  );
});

//?Eliminar un Producto =====================================================================================
router.delete("/categoria/:id", (req, res) => {
  const { id } = req.params;
  mySqlConnection.query(
    "DELETE FROM categorias WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Categoría eliminada" });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;