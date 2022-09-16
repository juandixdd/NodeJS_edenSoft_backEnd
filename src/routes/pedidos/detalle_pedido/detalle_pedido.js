const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../../conexion");

//? Traer todos los detalle-detalle- ====================================================================================
router.get("/detalle-pedido", (req, res) => {
    const query =
      "select * from detalle_pedido";
    mySqlConnection.query(query, (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });

  //? Traer a un pedido por id =====================================================================================
  router.get("/detalle-pedido/:id", (req, res) => {
    const { id } = req.params;
    query = "select * from detalle_pedido WHERE id_detalle_pedido = ?"
    mySqlConnection.query(
      query,
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

  //? Crear un pedido ============================================================================
router.post("/detalle-pedido", (req, res) => {
    //* Se define función para creación del usuario
    function createDetallepedido() {
      const { id_producto, id_pedido, cantidad, precio_unitario } = req.body;
      mySqlConnection.query(
        "INSERT INTO detalle_pedido (id_producto, id_pedido, cantidad, precio_unitario) VALUES (?,?,?,?)",
        [id_producto, id_pedido, cantidad, precio_unitario],
        (err, rows, fields) => {
          if (!err) {
            res.json({ status: "detalle del pedido creado", statusCode: 200 });
          } else {
            console.log(err);
          }
        }
      );
    }
  
    createDetallepedido();
  });

module.exports = router;