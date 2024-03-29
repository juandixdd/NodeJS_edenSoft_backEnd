const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../../conexion");

//? Get data
router.get("/clientes-informativos", (req, res) => {
  mySqlConnection.query(
    "SELECT * FROM clientes_informativos",
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

//? Get data by ID
router.get("/clientes-informativos/:id", (req, res) => {
  const { id } = req.params;
  mySqlConnection.query(
    "SELECT * FROM clientes_informativos WHERE id_cliente_documento = ?",
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

//? Validate and create data
router.post("/clientes-informativos", (req, res) => {
  //! Validación para ver si el id existe en la base de datos
  const { id_cliente_documento } = req.body;
  mySqlConnection.query(
    "SELECT * FROM clientes_informativos WHERE id_cliente_documento = ?",
    [id_cliente_documento],
    (err, rows, fields) => {
      if (!err) {
        if (rows.length >= 1) {
          res.json({
            status: "Ya hay un usuario registrado con esa cédula",
            statusCode: 403,
          });
        } else {
          //* Se llama a la función que crea el usuario
          createUser();
        }
      } else {
        console.log(err);
      }
    }
  );

  //! Se define función para creación del usuario, pero no se ejecuta aún
  function createUser() {
    const {
      id_cliente_documento,
      nombre,
      apellido,
      telefono,
    } = req.body;
    mySqlConnection.query(
      "INSERT INTO clientes_informativos (id_cliente_documento,nombre,apellido,telefono) VALUES (?,?,?,?)",
      [id_cliente_documento, nombre, apellido, telefono],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: 200, message: "Cliente creado con éxito" });
        } else {
          console.log(err);
        }
      }
    );
  }
});

//? Create cliente informativo
router.post("/clientes-informativos", (req, res) => {
  //* Se define función para creación del cliente
  function createCliente() {
    const { id_cliente_documento, nombre, apellido, telefono} = req.body;
    mySqlConnection.query(
      "INSERT INTO clientes_informativos (id_cliente_documento,nombre,apellido,telefono) VALUES (?,?,?,?)",
      [
        id_cliente_documento,
        nombre,
        apellido,
        telefono,
        
      ],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: "Cliente creado", statusCode: 200 });
        } else {
          console.log(err);
        }
      }
    );
  }
});

//?Editar un cliente =====================================================================================
router.put("/clientes-informativos/:id_cliente_documento", (req, res) => {
  const {  nombre, apellido, telefono} = req.body;
  const { id_cliente_documento } = req.params;
  mySqlConnection.query(
    "UPDATE clientes_informativos SET nombre = ?, apellido = ?, telefono = ? WHERE id_cliente_documento = ?",
    [
      nombre,
      apellido,
      telefono,
      id_cliente_documento,
    ],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Cliente actualizado" });
      } else {
        console.log(err);
      }
    }
  );
});

//Anular Usuario
router.put("/anula-usuario/:id", (req, res) => {
  const {estado } = req.body;
  const { id } = req.params;
  mySqlConnection.query(
    "UPDATE clientes_informativos SET estado = ? WHERE id_cliente_documento = ?",
    [estado, id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ 
          status:200, 
          message:"usuario actualizado" 
        });
      } else {
        console.log(err);
      }
    }
  );
});

//? Cambiar estado de un cliente =====================================================================================
router.put("/clientes-informativos/cambiarEstado/:id_cliente_documento", (req, res) => {
  const { estado } = req.body;
  const { id_cliente_documento } = req.params;
  let query = "UPDATE clientes_informativos SET estado = ? WHERE id_cliente_documento = ?";
  mySqlConnection.query(query, [estado, id_cliente_documento], (err, rows, fields) => {
    if (!err) {
      res.json({
        status: 200,
        message: "Cambio el estado del cliente",
        rows:rows
      });
    } else {
      console.log(err);
    }
  });
});

/////-------------------> VALIDACIONES DE PEDIDOS Y VENTAS <-------------------\\\\\\\


// get usuarios con ventas
router.get("/ventas-usuarios/:id", (req, res) => {
  const { id } = req.params;
  mySqlConnection.query(
    "SELECT * FROM venta_local WHERE id_cliente_documento=?;",
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

//Get Usuarios con pedidos
router.get("/pedidos-usuarios/:id", (req, res) => {
  const { id } = req.params;
  mySqlConnection.query(
    "SELECT * FROM pedidos WHERE id_cliente_documento=?;",
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



module.exports = router;
