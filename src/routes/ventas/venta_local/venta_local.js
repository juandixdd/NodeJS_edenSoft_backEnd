const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../../conexion");

//? Get data
router.get("/venta-local", (req, res) => {
  mySqlConnection.query("SELECT * FROM venta_local order by fecha_registro desc", (err, rows, fields) => {
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

//? Get all venta local Data
router.get("/venta-local-all-data/:id", (req, res) => {
  const { id } = req.params;
  let query =
    "select dv.*,p.nombre as 'product_name', p.precio as 'product_price',vl.*,ci.*from detalle_venta dv join productos p on p.id = dv.id_producto  join venta_local vl on vl.id_venta = dv.id_venta join clientes_informativos ci on ci.id_cliente_documento = vl.id_cliente_documento where vl.id_venta = ?";
  mySqlConnection.query(query, [id], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Create data
router.post("/venta-local", (req, res) => {
  const { id_cliente_documento, fecha_registro, precio_total, estado } =
    req.body;
  mySqlConnection.query(
    "INSERT INTO venta_local (id_cliente_documento,fecha_registro,precio_total,estado) VALUES (?,?,?,?)",
    [id_cliente_documento, fecha_registro, precio_total, estado],
    (err, rows, fields) => {
      if (!err) {
        res.json({
          status: 200,
          message: "Venta creada con éxito",
          data: rows,
        });
      } else {
        console.log(err);
      }
    }
  );
});

//? Anular una venta
router.put("/venta-local/:id_venta", (req, res) => {
  const { estado } = req.body;
  const { id_venta } = req.params;
  let query = "UPDATE venta_local SET estado = ? WHERE id_venta = ?";
  mySqlConnection.query(query, [estado, id_venta], (err, rows, fields) => {
    if (!err) {
      res.json({
        status: 200,
        message: "Cambió el estado de la venta",
      });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;


