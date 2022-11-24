const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../conexion");
const bcryptjs = require("bcrypt");

//? Get ventas top
router.get("/top-productos-ventas", (req, res) => {
  const query =
    "select dv.id_producto, p.nombre as 'producto',sum(dv.cantidad) as cantidad_ventas from detalle_venta dv join productos p on p.id = dv.id_producto group by dv.id_producto order by cantidad_ventas desc";
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
    "select dp.id_producto, p.nombre as 'producto', sum(dp.cantidad) as cantidad_ventas from detalle_pedido dp join productos p on p.id = dp.id_producto group by dp.id_producto order by cantidad_ventas desc";
  mySqlConnection.query(query, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Get pedidos_lcoales top global
router.get("/top-productos-pedidos-locales", (req, res) => {
  const query = `
  select
    dp.id_producto,
    p.nombre as 'producto',
    sum(dp.cantidad) as cantidad_ventas
  from
    detalle_pedido_local dp
  join productos p on
    p.id = dp.id_producto
  group by
    dp.id_producto
  order by
    cantidad_ventas desc
  `;
  mySqlConnection.query(query, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});


//========================================================================================================\\

//----------------------------------cards top 3---------------------------\\

//? Top productos en tabla PEDIDOS
router.post("/top3-pedidos", (req, res) => {
  const { mes,anio } = req.body;
  mySqlConnection.query(
    "select  dp.id_producto, sum(dp.cantidad) as cantidad_venta, p2.nombre, p2.imagen as img From pedidos p join detalle_pedido dp on dp.id_pedido = p.id_pedido join productos p2 on p2.id =dp.id_producto where fecha_registro is not null and month (fecha_registro)=? and year (fecha_registro)=? and p.tipo ='pedido' group by dp.id_producto ",
    [mes,anio],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

//? Top productos en tabla PEDIDOS_LOCALES
router.post("/top3-pedidos-locales", (req, res) => {
  const { mes,anio } = req.body;
  mySqlConnection.query(
    "select dp.id_producto, sum(dp.cantidad) as cantidad_venta, p2.nombre, p2.imagen as img From pedido_local p join detalle_pedido_local dp on dp.id_pedido_local = p.id_pedido_local join productos p2 on p2.id =dp.id_producto where fecha_registro is not null and month (fecha_registro)=? and year (fecha_registro)=? and p.estado = 1  group by dp.id_producto ",
    [mes,anio],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

//? Top productos en tabla VENTAS_LOCALES
router.post("/top3-ventas-locales", (req, res) => {
  const { mes,anio } = req.body;
  mySqlConnection.query(
    "select dv.id_producto, sum(dv.cantidad) as cantidad_venta, p2.nombre, p2.imagen as img From venta_local vl join detalle_venta dv on dv.id_venta  = vl.id_venta join productos p2 on p2.id =dv.id_producto where fecha_registro is not null and month (fecha_registro)= ? and year (fecha_registro)= ? and vl.estado = 1 group by dv.id_producto ",
    [mes,anio],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

//------------------------------------tabla ventas--------------------------------\\

//? valance diario de ventas segun periodo en tabla PEDIDOS
router.post("/totales-pedidos", (req, res) => {
  const { inicio,fin } = req.body;
  mySqlConnection.query(
    "select sum(p.precio_total) as valor_ventas,concat(month(fecha_registro),'/',day(fecha_registro))  as fecha from pedidos p join detalle_pedido dp on dp.id_pedido = p.id_pedido where fecha_registro between ? and ? and p.tipo ='pedido' and p.estado =1 group by fecha_registro",
    [inicio,fin],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

//? valance diario de ventas segun periodo en tabla PEDIDOS_LOCALES
router.post("/totales-pedidos-locales", (req, res) => {
  const { inicio,fin } = req.body;
  mySqlConnection.query(
    "select sum(pl.precio_total) as valor_ventas, concat(month(fecha_registro),'/',day(fecha_registro)) as fecha from pedido_local pl join detalle_pedido_local dpl on dpl.id_pedido_local = pl.id_pedido_local where fecha_registro between ? and ? and pl.estado =1 group by fecha_registro",
    [inicio,fin],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

//? valance diario de ventas segun periodo en tabla VENTAS_LOCALES
router.post("/totales-ventas", (req, res) => {
  const { inicio,fin } = req.body;
  mySqlConnection.query(
    "select sum(vl.precio_total) as valor_ventas, concat(month(fecha_registro),'/',day(fecha_registro)) as fecha from venta_local vl join detalle_venta dv on vl.id_venta = dv.id_venta where fecha_registro between ? and ? and vl.estado = 1 group by fecha_registro",
    [inicio,fin],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;



// select sum(p.precio_total) as valor_venta, sum(dp.cantidad) as ventas_totales, day(fecha_registro) as dia, month (fecha_registro)
// from pedido_local p join detalle_pedido_local dp on dp.id_pedido_local = p.id_pedido_local  
// where fecha_registro between '2022-11-1' and '2022-11-30' and p.estado =1 group by day(fecha_registro) and month (fecha_registro)