const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../conexion");
const bcryptjs = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

router.post("/verificar-token", (req, res) => {
  const { token } = req.body;
  const query = "select * FROM usuario WHERE forgot_token=?"
  mySqlConnection.query(query, [token], (err, rows, fields) => {
    if (!err) {
      if(rows.length!=0){
        res.json({
          status: 200,
          data: rows
        })
      }else{
        res.json({
          status: 403,
          message:"No se logro encontrar el token"
        })
      }

    } else {
      res.json({
        status: 403,
        err: err
      })
    }
  })
});

//editar contrasena

router.put("/editar-clave/:id_cliente_documento", (req, res) => {
  const { id_cliente_documento } = req.params
  const { contrasena } = req.body
  const hashedPassword = bcryptjs.hashSync(contrasena, 10);
  const query = "UPDATE usuario SET contrasena=? WHERE id_cliente_documento=?"
  console.log(hashedPassword, query);

  mySqlConnection.query(query, [hashedPassword, id_cliente_documento], (err, rows, fields) => {
    if (!err) {
      res.json({
        status: 200,
        message: "Se ha cambiado la contrasena"
      })
    } else {
      res.json({
        status: 403,
        message: "No se ha cambiado la contrasena",
        error: err
      })
    }
  })

});

//Buscar emails existentes

router.get("/buscar-correo/:email", (req, res) => {
  const { email } = req.params;
  const query = "select * from usuario where correo= ?";
  mySqlConnection.query(query, [email], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      res.send(err);
    }
  });
});

//Creamos el objeto de transporte
router.post("/send-mail", (req, res) => {
  const { toSend } = req.body;
  let generatedToken;
  let transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: "jdps1006@hotmail.com",
      pass: "danielpena.123",
    },
  });
  jwt.sign(
    {
      toSend: toSend,
    },
    "secretkey",
    (err, token) => {
      generatedToken = token;
      const updateQuery = "UPDATE usuario SET forgot_token=? WHERE id_cliente_documento=?"
      const getQuery = "select * from usuario where correo = ?"
      try {
        mySqlConnection.query(getQuery, [toSend], (err, rows, fields) => {
          if (!err) {
            if (rows.length != 0) {
              let userId = rows[0].id_cliente_documento
              console.log(rows[0]);
              mySqlConnection.query(updateQuery, [generatedToken, userId], (err, rows, fields) => {
                if (!err) {
                  console.log("Se actualizó el token");
                } else {
                  console.log("No se actualizó el token", err);
                }
              })
            }
          } else {
            res.send(err);
          }
        })
      } catch (error) {
        console.log(error);
      }


      if (!err) {
        let subject = "Restaura Tu Contrasena Bueñueleria El Eden";
        let html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
      <style>
          p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
          h1{ font-size: 30px !important;}
          h2{ font-size: 25px !important;}
          h3{ font-size: 18px !important;}
          h4{ font-size: 16px !important;}
          p, a{font-size: 15px !important;}
  
          .claseBoton{
              width: 30%;
                  background-color: #1187ab;
                  color: black; 
                  padding: 16px 32px;
                  text-align: center;
                  text-decoration: none;
                  font-weight: bold;
                  display: inline-block;
                  font-size: 16px;
                  margin: 4px 2px;
                  transition-duration: 0.4s;
                  cursor: pointer;
            border-radius: 10px
          }
          .claseBoton:hover{
              background-color: #000000;
              color: #ffffff;
          }
          .imag{
              width: 20px;
              height: 20px;
          }
          .contA{
              margin: 0px 5px 0 5px;
          }
          .afooter{
              color: #ffffff !important; 
              text-decoration: none;
              font-size: 13px !important;
          }
      </style>
  </head>
  <body>
      <div style="width: 100%; background-color: #e3e3e3;">
          <div style="padding: 20px 10px 20px 10px;">
              <!-- Imagen inicial -->
              <div style="background-color: #0e0e0e; padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                  <img src="https://i.pinimg.com/originals/c8/dc/5d/c8dc5d395e2a742e42892bbdaad53f22.jpg" alt="" style="width: 200px; height: 60px;">
              </div>
              <!-- Imagen inicial -->
  
              <!-- Contenido principal -->
              <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: center;">
                  <h1>¿Olvidase tu contraseña de Eden.Soft? 😱</h1>
                  <p>!No te preocupes¡ este es un correo de verificación, para recuperar tu contraseña presiona el botón.
                  </p>
  
                 
                  <p style="margin-bottom: 50px;"><i>Atentamente:</i><br>Equipo Eden.Soft</p>
  
                  <!-- Botón -->
                  <a class="claseBoton" href="http://localhost:4200/main/restaurar-clave/${token}">Recuperar contraseña</a>
              </div>
              <!-- Contenido principal -->
  
              <!-- Footer -->
              <div style="background-color: #282828; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                  
  
                  <h4>Soporte</h4>
                  <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                      Comunícate con nosotros por los siguientes medios:<br>
                      Correo: <a class="afooter" href="mailto:proyectos@pretwor.com">correo@correo.com</a><br>
                      Whatsapp: <a class="afooter" href="https://wa.me/573224294332">+57 322 429 4332</a><br>
                  </p>
                  <p style="background-color: black; padding: 10px 0px 10px 0px; font-size: 12px !important;">
                      © 2022 Eden.Soft, todos los derechos reservados.
                  </p>
              </div>
              <!-- Footer -->
  
  
  
          </div>
      </div>
  </body>
  </html>
  
  
  
  
  `;

        let mailOptions = {
          from: "jdps1006@hotmail.com",
          to: toSend,
          subject: subject,
          html: html,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
            res.send({
              status: 403,
              message: "No se envió el email",
            });
          } else {
            console.log("Email enviado: " + info.response);
            res.send({
              status: 200,
              message: "Email enviado con exito",
              token: token,
            });
          }
        });
      } else {
        res.send({
          status: 403,
          message: "no se genero el token",
        });
      }
    }
  );
});



module.exports = router;
