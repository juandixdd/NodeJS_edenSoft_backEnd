const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../../conexion");

//? Traer todos las cotizaciones =====================================================================================
router.get("/cotizacion", (req, res) => {
  const query = "select * from cotizacion ";
  mySqlConnection.query(query, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Traer a una cotizacion por id =====================================================================================
router.get("/cotizacion/:id", (req, res) => {
  const { id } = req.params;
  query = "SELECT * from cotizacion where id_cotizacion = ?";
  mySqlConnection.query(query, [id], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Crear una cotizacion ============================================================================
router.post("/cotizacion", (req, res) => {
  //* Se define función para creación de la cotizacion
  function createCotizacion() {
    const {
      id_cotizacion,
      id_cliente_documento,
      precio_total,
      fecha_registro,
      fecha_entrega,
      estado,
    } = req.body;
    mySqlConnection.query(
      "INSERT INTO cotizacion (id_cotizacion, id_cliente_documento, precio_total, fecha_registro, fecha_entrega, estado ) VALUES (?,?,?,?,?,?)",
      [
        id_cotizacion,
        id_cliente_documento,
        precio_total,
        fecha_registro,
        fecha_entrega,
        estado,
      ],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: "Cotizacion creada", statusCode: 200 }); 
        } else {
          console.log(err);
        }
      }
    );
  }

  createCotizacion();
});

module.exports = router;
