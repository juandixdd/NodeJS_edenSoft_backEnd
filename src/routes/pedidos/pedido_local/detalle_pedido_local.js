const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../../conexion");

//? Get data
router.get("/detalle-pedido-local", (req, res) => {
  mySqlConnection.query("SELECT * FROM detalle_pedido_local", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Get data by ID
router.get("/detalle-pedido-local/:id", (req, res) => {
  const { id } = req.params;
  mySqlConnection.query(
    "SELECT * FROM detalle_pedido_local WHERE id_detalle_pedido_local = ?",
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
router.post("/detalle-pedido-local", (req, res) => {
  const { id_producto, id_pedido_local, cantidad, precio_unitario } = req.body;
  mySqlConnection.query(
    "INSERT INTO detalle_pedido_local (id_producto, id_pedido_local, cantidad, precio_unitario) VALUES (?,?,?,?)",
    [id_producto, id_pedido_local, cantidad, precio_unitario],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: 200, message: "Detalle del pedido creado con éxito" });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
