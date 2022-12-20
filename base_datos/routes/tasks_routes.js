const express= require('express');
let router=express.Router();
let TasksController = require("../controllers/tasks");


router.route('/tasks').get(TasksController.index).post(TasksController.create);

router.get("/tasks/new",TasksController.new);

router.route('/tasks/:id').get(TasksController.show).put(TasksController.update);


module.exports= router;