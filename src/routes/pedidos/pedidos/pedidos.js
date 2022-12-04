const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../../conexion");

// ************************** Pedidos **************************

//? Traer todos los pedidos =====================================================================================
router.get("/pedidos", (req, res) => {
  const query =
    "select p.*, ci.* from pedidos p join clientes_informativos ci on ci.id_cliente_documento = p.id_cliente_documento where tipo = 'pedido' order by fecha_registro desc";
  mySqlConnection.query(query, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});


//? Traer todos los pedidos por cliente =====================================================================================
router.get("/pedidos/cliente/:cedula", (req, res) => {
  const {cedula} = req.params
  const query =
    "select p.*, ci.* from pedidos p join clientes_informativos ci on ci.id_cliente_documento = p.id_cliente_documento where tipo = 'pedido' and p.id_cliente_documento= ? order by fecha_entrega asc";
  mySqlConnection.query(query, [cedula], (err, rows, fields) => {
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
  (query =
    "select p.*, dp.id_pedido as 'id_detalle', dp.id_producto, pr.nombre, dp.cantidad, dp.precio_unitario, concat(ci.nombre,' ',ci.apellido) as cliente, ci.telefono  from pedidos p join clientes_informativos ci on ci.id_cliente_documento = p.id_cliente_documento  join detalle_pedido dp on dp.id_pedido = p.id_pedido join productos pr on pr.id = dp.id_producto where tipo = 'pedido' and dp.id_pedido = ?"),
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
      id_cliente_documento,
      tipo,
      fecha_registro,
      precio_total,
      estado,
      fecha_entrega,
    } = req.body;
    mySqlConnection.query(
      "INSERT INTO pedidos (id_cliente_documento, tipo, fecha_registro, precio_total, estado, fecha_entrega) VALUES (?,?,?,?,?,?)",
      [
        id_cliente_documento,
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
//? anular un pedido =====================================================================================
router.put("/pedidos/anular/:id", (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;
  (query = "UPDATE pedidos SET estado = ? WHERE id_pedido = ?"),
    mySqlConnection.query(query, [estado, id], (err, rows, fields) => {
      if (!err) {
        res.json({
          status:200, 
          message: "Cambio el estado del pedido",
          rows:rows
        });
      } else {
        console.log(err);
      }
    });
});

// ************************** Pedidos **************************

//? Traer cotizaciones =====================================================================================
router.get("/cotizaciones", (req, res) => {
  const { id } = req.params;
  query =
    "select p.*, concat(ci.nombre,' ', ci.apellido) as 'Nombre_usuario' from pedidos p join clientes_informativos ci on ci.id_cliente_documento = p.id_cliente_documento where p.tipo = 'cotizacion' order by p.fecha_registro desc";
  mySqlConnection.query(query, [id], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Traer cotizacionesbyid =====================================================================================
router.get("/cotizaciones/usuario/:id", (req, res) => {
  const { id } = req.params;
  (query =
    "select p.*, concat(ci.nombre, ' ', ci.apellido) as 'Nombre_usuario' from pedidos p join clientes_informativos ci on ci.id_cliente_documento  = p.id_cliente_documento where tipo = 'cotizacion' and ci.id_cliente_documento = ? order by fecha_registro desc"),
    [id],
    mySqlConnection.query(query, [id], (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
});

//? traer cotizacion por id con los productos =====================================================================================
router.get("/cotizaciones/:id", (req, res) => {
  const { id } = req.params;
  (query =
    "select p.*, dp.id_pedido as 'id_detalle',dp.id_producto, pr.nombre,dp.cantidad,dp.precio_unitario,concat(ci.nombre, ' ', ci.apellido) as 'Nombre_usuario' from pedidos p join detalle_pedido dp on dp.id_pedido = p.id_pedido join productos pr on pr.id = dp.id_producto join clientes_informativos ci on ci.id_cliente_documento = p.id_cliente_documento where tipo = 'cotizacion' and dp.id_pedido = ?"),
    [id],
    mySqlConnection.query(query, [id], (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
});

//? traer cotizacion por id con la info =====================================================================================
router.get("/cotizaciones/info/:id", (req, res) => {
  const { id } = req.params;
  (query =
    "select p.*, concat(ci.nombre, ' ', ci.apellido) as 'Nombre_usuario' from pedidos p join clientes_informativos ci on ci.id_cliente_documento = p.id_cliente_documento where id_pedido = ?"),
    [id],
    mySqlConnection.query(query, [id], (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
});

//? anular una cotizacion =====================================================================================
router.put("/cotizaciones/anular/:id", (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;
  (query = "UPDATE pedidos SET estado = ? WHERE id_pedido = ?"),
    mySqlConnection.query(query, [estado, id], (err, rows, fields) => {
      if (!err) {
        res.json({
          status:200, 
          message: "Cambio el estado de la cotizacion",
          rows:rows
        });
      } else {
        console.log(err);
      }
    });
});

//? hacer pedido una cotizacion =====================================================================================
router.put("/cotizacion/hacer_pedido/:id", (req, res) => {
  const { tipo, fecha_entrega } = req.body;
  const { id } = req.params;
  (query =
    "UPDATE pedidos SET tipo = ?, fecha_entrega = ? WHERE id_pedido = ?"),
    mySqlConnection.query(
      query,
      [tipo, fecha_entrega, id],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: 200, message: "Se hizo el pedido exitosamente" });
        } else {
          console.log(err);
        }
      }
    );
});

module.exports = router;
