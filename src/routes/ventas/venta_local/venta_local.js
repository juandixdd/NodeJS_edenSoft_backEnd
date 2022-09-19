const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../../conexion");

//? Get data
router.get("/venta-local", (req, res) => {
  mySqlConnection.query("SELECT * FROM venta_local", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Get data by ID
router.get("/venta-local/:id", (req, res) => {
  const { id } = req.params;
  mySqlConnection.query(
    "SELECT * FROM venta_local WHERE id_venta = ?",
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

router.post("/venta-local", (req, res) => {
  const { id_cliente_documento, fecha_registro, precio_total, estado } =
    req.body;
  mySqlConnection.query(
    "INSERT INTO venta_local (id_cliente_documento,fecha_registro,precio_total,estado) VALUES (?,?,?,?)",
    [id_cliente_documento, fecha_registro, precio_total, estado],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: 200, message: "Cliente creado con éxito" });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
