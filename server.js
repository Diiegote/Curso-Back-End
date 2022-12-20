const express= require("express");
const bodyParser= require("body-parser");
const app = express();


// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use("view engine","pug");

//metodo get
app.get("/",(req,res)=>{
res.send("Hola Mundo!!!");
})

//metodo get usando query
app.get("/saludo",(req,res)=>{
   res.send(`Hola ${req.body.name}`);
});

//metodo post
app.post("/",(req,res)=>{
   const {name}=req.body;
   res.send(`hola ${name}`);
})


app.listen(3000,()=>{
   console.log("%s listening at 3000");
});