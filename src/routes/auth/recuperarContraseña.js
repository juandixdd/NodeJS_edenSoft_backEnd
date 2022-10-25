const express = require("express");
const router = express.Router();
const mySqlConnection = require("../../conexion");
const bcryptjs = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

//Creamos el objeto de transporte
router.post("/send-mail", (req, res) => {
  const {mensaje,toSend} = req.body;
  let transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: "jdps1006@hotmail.com",
      pass: "danielpena.123",
    },
  });

  let subject= "Restaura Tu Contrasena Bueñueleria El Eden"
  let html=`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- CSS only -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
      <title>Document</title>
    </head>
  
    <body>
      <style>
        .tittle {
          justify-content: end;
          text-align: center;
          background-color: #1187ab;
          color: whitesmoke;
          padding: 2rem;
        }
        .footer {
          margin-top: 5rem;
          background-color: rgb(63, 63, 63);
          color: aliceblue;
        }
  
        .img {
          width: 10%;
          height: auto;
          border-radius: 50%;
        }
  
        .section1 {
          margin: 1rem;
          text-align: center;
        }
      </style>
      <header>
        <div class="row tittle">
          <div class="col-12">
            <img class="img" src="https://i.pinimg.com/originals/c8/dc/5d/c8dc5d395e2a742e42892bbdaad53f22.jpg" alt="" />
            <h1>Eden.soft</h1>
          </div>
        </div>   
      </header>
      <section>
        <div class="row justify-content-center section1">
          <div class="col-12">
            <p class="mt-3">
              Nos informaste que no se te olvido la contraseña y no puedes
              ingresar a nuestra plataforma 😭, Presiona en el siguiente boton y
              crea una nueva contraseña.
            </p>
            <button class="btn btn-dark">PRESIONA AQUI</button>
          </div>
        </div>
      </section>
      <footer class="footer p-2 ">
        <div class="row justify-content-center">
          <div class="col-auto">
          </div>
          <div class="col-auto">
            <p>CONTACTANOS:</p>
            <p>‣Correo: soporte.eden.soft@gmail.com</p>
            <p>‣Telefono: 3333333</p>
            <p>‣Celular: 33332323323</p>
          </div>
        </div>
      </footer>
      <!-- JavaScript Bundle with Popper -->
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"
      ></script>
    </body>
  </html> 
  `

  let mailOptions = {
    from: "jdps1006@hotmail.com",
    to: toSend,
    subject: subject,
    html: html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email enviado: " + info.response);
    }
  });
});

module.exports = router;
