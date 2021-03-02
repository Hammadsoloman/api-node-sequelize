const express = require("express");
let app=express();

const PORT = 3000;

//const path = require("path");

const bodyParser=require("body-parser");

const Sequelize = require('sequelize');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const router = express.Router();
app.use(router);

// DB connection
require("./src/database/connection");

router.use((err,req,res,next)=>{
    if(err){
        return res.send(err.message);
    }
});

app.listen(PORT,err=>{
    if(err) return console.log(`Cannot Listen on PORT:${PORT}`);
    console.log(`Server is Listining on: http://localhost:${PORT}/`);
});