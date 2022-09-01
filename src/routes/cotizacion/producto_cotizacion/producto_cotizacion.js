const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../../conexion");

//? Traer todos los producto_cotizacion =====================================================================================
router.get("/producto_cotizacion", (req, res) => {
  const query = "select * from producto_cotizacion ";
  mySqlConnection.query(query, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Traer producto_cotizacion por id =====================================================================================
router.get("/producto_cotizacion/:id", (req, res) => {
  const { id } = req.params;
  query = "SELECT * from producto_cotizacion where id_producto_cotizacion = ?";
  mySqlConnection.query(query, [id], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Crear un producto_cotizacion ============================================================================
router.post("/producto_cotizacion", (req, res) => {
  //* Se define función para creación del producto_cotizacion
  function createProducto_cotizacion() {
    const { id_producto_cotizacion, id_cotizacion, id_producto } = req.body;
    mySqlConnection.query(
      "INSERT INTO producto_cotizacion (id_producto_cotizacion, id_cotizacion, id_producto) VALUES (?,?,?)",
      [id_producto_cotizacion, id_cotizacion, id_producto],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: "Producto_cotizacion creado", statusCode: 200 });
        } else {
          console.log(err);
        }
      }
    );
  }

  createProducto_cotizacion();
});

//?Editar un producto_cotizacion =====================================================================================
router.put("/producto_cotizacion/:id", (req, res) => {
  const { id_producto_cotizacion, id_cotizacion, id_producto } = req.body;
  const { id } = req.params;
  mySqlConnection.query(
    "UPDATE producto_cotizacion SET id_producto_cotizacion = ?, id_cotizacion = ?, id_producto = ? WHERE id_producto_cotizacion = ?",
    [id_producto_cotizacion, id_cotizacion, id_producto, id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Producto_cotizacion actualizado" });
      } else {
        console.log(err);
      }
    }
  );
});

//?Eliminar un Producto_cotizacion =====================================================================================
router.delete("/producto_cotizacion/:id", (req, res) => {
    const { id } = req.params;
    mySqlConnection.query(
      "DELETE FROM producto_cotizacion WHERE id_producto_cotizacion = ?",
      [id],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: "Producto_cotizacion eliminado" });
        } else {
          console.log(err);
        }
      }
    );
  });

module.exports = router;
