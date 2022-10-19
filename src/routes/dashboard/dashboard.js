const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../conexion");
const bcryptjs = require("bcrypt");



//? Get ventas top 
router.get("/top-productos-ventas", (req, res) => {
    const query =
    "select dv.*, p.nombre as 'producto',sum(dv.cantidad) as cantidad_ventas from detalle_venta dv join productos p on p.id = dv.id_producto group by dv.id_producto order by cantidad_ventas desc"
    mySqlConnection.query(query, (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });

  //? Get pedidos top 
router.get("/top-productos-pedidos", (req, res) => {
    const query =
   "select   dp.*,   p.nombre as 'producto',   sum(dp.cantidad) as cantidad_ventas from   detalle_pedido dp join productos p on   p.id = dp.id_producto group by   dp.id_producto order by cantidad_ventas desc "
    mySqlConnection.query(query, (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });


  




module.exports = router;
