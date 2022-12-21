const express = require("express");
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const app = express();
const methodOverride = require("method-override");

const tasksRoutes=require("./routes/tasks_routes");
const registrationsRoutes = require("./routes/registrations_routes");


// para poder utilizar el metodo post
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
app.set("view engine", "pug");
app.use(tasksRoutes);
app.use(registrationsRoutes);

app.listen(3000)

