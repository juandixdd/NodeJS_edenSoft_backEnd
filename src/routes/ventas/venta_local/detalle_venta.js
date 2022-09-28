const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../../conexion");

//? Get data
router.get("/detalle-venta", (req, res) => {
  mySqlConnection.query("SELECT * FROM detalle_venta", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Get data by ID
router.get("/detalle-venta/:id", (req, res) => {
  const { id } = req.params;
  mySqlConnection.query(
    "SELECT * FROM detalle_venta WHERE id_venta = ?",
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

//? Create data
router.post("/detalle-venta", (req, res) => {
  const { id_producto, id_venta, cantidad, precio_unitario } = req.body;
  mySqlConnection.query(
    "INSERT INTO detalle_venta (id_producto,id_venta,cantidad,precio_unitario) VALUES (?,?,?,?)",
    [id_producto, id_venta, cantidad, precio_unitario],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: 200, message: "Detalle de venta creada con éxito" });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
