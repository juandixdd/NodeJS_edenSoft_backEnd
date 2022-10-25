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
  

  let mailOptions = {
    from: "jdps1006@hotmail.com",
    to: toSend,
    subject: subject,
    text: mensaje,
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
