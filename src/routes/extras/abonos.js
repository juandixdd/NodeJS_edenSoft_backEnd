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
  const selectQuery = "select * from abono where id_venta_local = ?";
  mySqlConnection.query(selectQuery, [id_venta_local], (err, rows, fields) => {
    if (!err) {
      if (rows.length == 0) {
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
      } else {
        res.json({
          status: 400,
          message: "Ya existe el abono",
          data: rows,
        });
      }
    } else {
      console.log(err);
    }
  });
});


router.post("/abonos/pedido", (req, res) => {
  const { id_venta_local, id_pedido_local, valor } = req.body;
  const selectQuery = "select * from abono where id_pedido_local = ?";
  mySqlConnection.query(selectQuery, [id_pedido_local], (err, rows, fields) => {
    if (!err) {
      if (rows.length == 0) {
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
      } else {
        res.json({
          status: 400,
          message: "Ya existe el abono",
          data: rows,
        });
      }
    } else {
      console.log(err);
    }
  });
});
module.exports = router;
