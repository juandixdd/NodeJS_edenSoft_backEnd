const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../../conexion");

//? Traer todos los pedidos =====================================================================================
router.get("/pedidos", (req, res) => {
  const query = "select * from pedidos";
  mySqlConnection.query(query, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Traer a un pedido por id =====================================================================================
router.get("/pedidos/:id", (req, res) => {
  const { id } = req.params;
  query = "select * from pedidos WHERE id_pedido = ?";
  mySqlConnection.query(query, [id], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Traer cotizaciones =====================================================================================
router.get("/cotizaciones", (req, res) => {
  const { id } = req.params;
  query = "select * from pedidos where tipo = 'cotizacion' ";
  mySqlConnection.query(query, [id], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? traer cotizacion por id =====================================================================================
router.get("/cotizaciones/:id", (req, res) => {
  const { id } = req.params;
  (query =
    "select p.*, dp.id_pedido as 'id_detalle', dp.id_producto, pr.nombre, dp.cantidad, dp.precio_unitario  from pedidos p join detalle_pedido dp on dp.id_pedido = p.id_pedido join productos pr on pr.id = dp.id_producto where tipo = 'cotizacion' and dp.id_pedido = ?"),
    [id],
    mySqlConnection.query(query, [id], (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
});

//? Crear un pedido ============================================================================
router.post("/pedidos", (req, res) => {
  //* Se define función para creación del usuario
  function createPedido() {
    const {
      id_usuario_documento,
      tipo,
      fecha_registro,
      precio_total,
      estado,
      fecha_entrega,
    } = req.body;
    mySqlConnection.query(
      "INSERT INTO pedidos (id_usuario_documento, tipo, fecha_registro, precio_total, estado, fecha_entrega) VALUES (?,?,?,?,?,?)",
      [
        id_usuario_documento,
        tipo,
        fecha_registro,
        precio_total,
        estado,
        fecha_entrega,
      ],
      (err, rows, fields) => {
        if (!err) {
          res.json({
            status: "pedido creado",
            statusCode: 200,
            pedidoId: rows.insertId,
          });
        } else {
          console.log(err);
        }
      }
    );
  }

  createPedido();
});

module.exports = router;
