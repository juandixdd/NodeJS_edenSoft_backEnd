const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../conexion");

//? Get data
router.get("/abonos", (req, res) => {
  mySqlConnection.query("SELECT * FROM abono", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Create data
router.post("/abonos", (req, res) => {
  const { id_venta_local, id_pedido_local, valor } = req.body;
  mySqlConnection.query(
    "INSERT INTO abono (id_venta_local,id_pedido_local,valor) VALUES (?,?,?)",
    [id_venta_local, id_pedido_local, valor],
    (err, rows, fields) => {
      if (!err) {
        res.json({
          status: 200,
          message: "Abono creado con éxito",
          data: rows,
        });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
