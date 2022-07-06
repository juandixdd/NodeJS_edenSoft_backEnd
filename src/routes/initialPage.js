const express = require("express");
const router = express.Router();

const html='<h1>Welcome to the jungle</h1>';

router.get("/",(req,res)=>{
    res.send(html);
})

module.exports = router; //super importante poner esto porque si no paila la app

