const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../conexion");
const bcryptjs = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

//Creamos el objeto de transporte
router.post("/send-mail", (req, res) => {
  const { mensaje, toSend } = req.body;
  let transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: "jdps1006@hotmail.com",
      pass: "danielpena.123",
    },
  });

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
                  <a class="claseBoton">Recuperar contraseña</a>
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
      });
    }
  });
});

module.exports = router;
