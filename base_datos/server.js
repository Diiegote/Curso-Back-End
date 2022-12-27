const express = require("express");
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const app = express();
const methodOverride = require("method-override");
const session= require("express-session")

const tasksRoutes=require("./routes/tasks_routes");
const registrationsRoutes = require("./routes/registrations_routes");
const sessionsRoutes=require("./routes/sessions_routes");
const findUserMiddleWare = require("./middlewares/find_user"); //importamos el middleware que busca el id del usaurio
const authUser = require("./middlewares/auth_user"); //middlaware para authenticar un usuario
const categoriesRoutes= require("./routes/categories_routes");


// para poder utilizar el metodo post
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method")) // para usar los metodos put,patch y delete
app.set("view engine", "pug");

app.use(session({
   secret:["12sdfsdfsdfsdfsdfsdfsdf","123sdfgsdtewrerfhgefhg"], // configuracion del express-session
   saveUninitialized:false,
   resave:false
}));
app.use(findUserMiddleWare); //funcion que busca si existe el id del usuario
app.use(authUser); // funcion que chekea que el usuario tenga permisos para ingresar a ver las tareas


app.use(tasksRoutes);
app.use(registrationsRoutes);
app.use(sessionsRoutes);
app.use(categoriesRoutes);

app.get("/",(req,res)=>{
   res.render("home",{user:req.user});
})

app.listen(3000)

