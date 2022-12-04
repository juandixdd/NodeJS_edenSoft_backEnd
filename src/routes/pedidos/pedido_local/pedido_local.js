const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../../conexion");

//? Get data
router.get("/pedido-local", (req, res) => {
  mySqlConnection.query("SELECT pl.*,ci.* FROM pedido_local pl join clientes_informativos ci on ci.id_cliente_documento = pl.id_cliente_documento", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Get data by ID
router.get("/pedido-local/:id", (req, res) => {
  const { id } = req.params;
  mySqlConnection.query(
    "SELECT * FROM pedido_local WHERE id_pedido_local = ?",
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

//? Get all pedido local Data
router.get("/pedido-local-all/:id", (req, res) => {
  const { id } = req.params;
  let getAbonoQuery = "select * from abono where id_pedido_local = ?";
  let queryWithoutAbono =
    "select dpl.*, p.nombre as 'product_name', p.precio as 'product_price',pl.*,ci.* from detalle_pedio_local dpl join productos p on p.id = dpl.id_producto  join pedido_local pl on pl.id_pedio_local = dpl.id_pedido_local join clientes_informativos ci on ci.id_cliente_documento = pl.id_cliente_documento where pl.id_pedido_local = ?";
  let queryWithAbono =
    "select dpl.*,p.nombre as 'product_name', p.precio as 'product_price',pl.*,ci.*, a.valor as 'cantidad_abono', a.estado as 'estado_abono' from detalle_pedido_local dpl join productos p on p.id = dpl.id_producto join pedido_local pl on pl.id_pedido_local = dpl.id_pedido_local join clientes_informativos ci on ci.id_cliente_documento = pl.id_cliente_documento join abono a on a.id_pedido_local = dpl.id_pedido_local where pl.id_pedido_local  = ?";
  mySqlConnection.query(getAbonoQuery, [id], (err, rows, fields) => {
    if (!err) {
      if (rows.length != 0){
        mySqlConnection.query(queryWithAbono, [id], (err, rows, fields) => {
          if(!err) {
            res.send(rows);
          }else {
            console.log(err);
          }
        });
    } else {
      mySqlConnection.query(queryWithoutAbono, [id], (err, rows, fields) => {
        if (!err) {
          res.send(rows);
        }else {
          console.log(err);
        }
      });
    }
   } else {
    console.log(err);
   }
  });
  
});


//? Create data
router.post("/pedido-local", (req, res) => {
  const { id_cliente_documento, fecha_registro, fecha_entrega, precio_total, estado, pagado } =
    req.body;
  mySqlConnection.query(
    "INSERT INTO pedido_local (id_cliente_documento,fecha_registro, fecha_entrega,precio_total,estado) VALUES (?,?,?,?,?)",
    [id_cliente_documento, fecha_registro, fecha_entrega, precio_total,  estado],
    (err, rows, fields) => {
      if (!err) {
        res.json({
          status: 200,
          message: "Pedido local creado con éxito",
          data: rows,
        });
      } else {
        console.log(err);
      }
    }
  );
});

//? editData
router.put("/pedido-local/:id_pedido_local", (req, res) => {
  const { id_pedido_local } = req.params;
  const { estado } = req.body;
  mySqlConnection.query(
    "UPDATE pedido_local SET estado = ? WHERE id_pedido_local = ?",
    [estado, id_pedido_local],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: 200, message: "Pedido actualizado" });
      } else {
        console.log(err);
      }
    }
  );
});

//? editData
router.put("/pedido-local/abono/:id_pedido_local", (req, res) => {
  const { id_pedido_local } = req.params;
  const { estado } = req.body;
  mySqlConnection.query(
    "UPDATE abono SET estado = ? WHERE id_pedido_local = ?",
    [estado, id_pedido_local],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: 200, message: "Abono actualizado" });
      } else {
        console.log(err);
      }
    }
  );
});


//? Anular un pedido
router.put("/pedido-local/:id_pedido_local", (req, res) => {
    const { estado } = req.body;
    const { id_pedido_local } = req.params;
    let query = "UPDATE pedido_local SET estado = ? WHERE id_pedido_local = ?";
    mySqlConnection.query(query, [estado, id_pedido_local], (err, rows, fields) => {
      if (!err) {
        res.json({
          status: 200,
          message: "Cambió el estado del pedido local",
        });
      } else {
        console.log(err);
      }
    });
  });

module.exports = router;
