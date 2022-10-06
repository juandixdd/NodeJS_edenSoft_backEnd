const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../../conexion");

//? Traer todos los productos =====================================================================================
router.get("/productos", (req, res) => {
  const query =
    "select p.*, c.nombre as 'nombre_categoria' from productos p join categorias c on c.id = p.categoria ";
  mySqlConnection.query(query, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Traer a un producto por id =====================================================================================
router.get("/productos/:id", (req, res) => {
  const { id } = req.params;
  query = "SELECT p.*, c.nombre as 'nombre_categoria' FROM productos p join categorias c on c.id = p.categoria WHERE p.id = ?"
  mySqlConnection.query(
    query,
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

//? Crear un producto ============================================================================
router.post("/productos", (req, res) => {
  //* Se define función para creación del usuario
  function createProduct() {
    const { nombre, precio, categoria, imagen, estado } = req.body;
    mySqlConnection.query(
      "INSERT INTO productos (nombre,precio,categoria,imagen,estado) VALUES (?,?,?,?,?)",
      [nombre, precio, categoria, imagen, estado],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: "Producto creado", statusCode: 200 });
        } else {
          console.log(err);
        }
      }
    );
  }

  createProduct();
});

//?Editar un producto =====================================================================================
router.put("/productos/:id", (req, res) => {
  const { nombre, precio, categoria, imagen } = req.body;
  const { id } = req.params;
  mySqlConnection.query(
    "UPDATE productos SET nombre = ?, precio = ?, categoria = ?, imagen = ? WHERE id = ?",
    [nombre, precio, categoria, imagen,  id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Producto actualizado" });
      } else {
        console.log(err);
      }
    }
  );
});

//?Eliminar un Producto =====================================================================================
router.delete("/productos/:id", (req, res) => {
  const { id } = req.params;
  mySqlConnection.query(
    "DELETE FROM productos WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Producto eliminado" });
      } else {
        console.log(err);
      }
    }
  );
});


//? Traer todos los en un objeto =====================================================================================
router.get("/productos/object/:id", (req, res) => {
  const { id } = req.params;
  query = "SELECT p.*, c.nombre as 'nombre_categoria' FROM productos p join categorias c on c.id = p.categoria WHERE p.id = ?"
  mySqlConnection.query(
    query,
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows[0]);
      } else {
        console.log(err);
      }
    }
  );
});


//? Cambiar estado de un producto =====================================================================================
router.put("/productos/cambiarEstado/:id", (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;
  (query = "UPDATE productos SET estado = ? WHERE id = ?"),
    mySqlConnection.query(query, [estado, id], (err, rows, fields) => {
      if (!err) {
        res.json({
          status:200, 
          message: "Cambio el estado del producto",
          rows:rows
        });
      } else {
        console.log(err);
      }
    });
});
module.exports = router;
