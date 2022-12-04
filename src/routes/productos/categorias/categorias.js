const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../../conexion");

//? Traer todos los categorias =====================================================================================
router.get("/categoria", (req, res) => {
  mySqlConnection.query("SELECT * FROM categorias", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

//? Traer a un categoria por id =====================================================================================
router.get("/categoria/:id", (req, res) => {
  const { id } = req.params;
  mySqlConnection.query(
    "SELECT * FROM categorias WHERE id = ?",
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

//? get categoria by nombre   =====================================================================================
router.get("/categoria/nombre/:nombre", (req, res) => {
  const { nombre } = req.params;
  mySqlConnection.query(
    "SELECT * FROM categorias WHERE nombre = ?",
    [nombre],
    (err, rows, fields) => {
      if (!err) {
        if (rows.length === 0) {
          res.send({
            exists: false,
          });
        } else {
          res.send({
            exists: true,
            data: rows,
          });
        }
      } else {
        console.log(err);
      }
    }
  );
});

//? Crear un categoriaa ============================================================================
router.post("/categoria", (req, res) => {
  //* Si no hay categorias registradas con el nombre, lo deja crear
  const {nombre} = req.body;
  mySqlConnection.query(
    "SELECT * FROM categorias WHERE nombre = ?",
    [nombre],
    (err, rows, fields) => {
      if (!err) {
        if (rows.length >= 1) {
          res.json({
            status: "Ya hay una categoria registrada con este nombre",
            statusCode: 403,
          });
        } else {
          //* Si no hay categorias registradas con el nombre, lo deja crear
          createCategoria();
        }
      } else {
        console.log(err);
      }
    }
  );

  const createCategoria = () => {
    const { nombre, estado } = req.body;
    mySqlConnection.query(
      "INSERT INTO categorias (nombre,estado) VALUES (?,?)",
      [nombre, estado],
      (err, rows, fields) => {
        if (!err) {
          res.json({ status: "categoria creada", statusCode: 200 });
        } else {
          console.log(err);
        }
      }
    );
  }
});


//?Editar un categoria =====================================================================================
router.put("/categoria/:id", (req, res) => {
//* Si no hay categorias registradas con el nombre, lo deja crear
const {nombre} = req.body;
const {id} = req.body;
mySqlConnection.query(
  "SELECT * FROM categorias WHERE nombre = ?",
  [nombre, id],
  (err, rows, fields) => {
    if (!err) {
      if (rows.length >= 1) {
        res.json({
          status: "Ya hay una categoria registrada con este nombre",
          statusCode: 403,
        });
      } else {
        //* Si no hay categorias registradas con el nombre, lo deja crear
        EditCategoria();
      }
    } else {
      console.log(err);
    }
  }
);

const EditCategoria = () => {
  const { nombre} = req.body;
  const { id } = req.params;
  mySqlConnection.query(
    "UPDATE categorias SET nombre = ? WHERE id = ?",
    [nombre, id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Categoria actualizada" });
      } else {
        console.log(err);
      }
    }
  );
}
});

//?Eliminar un categoria =====================================================================================
router.delete("/categoria/:id", (req, res) => {
  const { id } = req.params;
  mySqlConnection.query(
    "DELETE FROM categorias WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Categoría eliminada" });
      } else {
        console.log(err);
      }
    }
  );
});


//? Cambiar estado de una categoria =====================================================================================
router.put("/categoria/cambiarEstado/:id", (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;
  (query = "UPDATE categorias SET estado = ? WHERE id = ?"),
    mySqlConnection.query(query, [estado, id], (err, rows, fields) => {
      if (!err) {
        res.json({
          status:200, 
          message: "Cambio el estado de la categoria",
          rows:rows
        });
      } else {
        console.log(err);
      }
    });
});




module.exports = router;
