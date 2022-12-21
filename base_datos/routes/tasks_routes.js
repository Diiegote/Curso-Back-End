const express= require('express');
let router=express.Router();
let TasksController = require("../controllers/tasks");


router.route('/tasks').get(TasksController.index).post(TasksController.create);

router.get("/tasks/new",TasksController.new);

router.get("/tasks/:id/edit",TasksController.edit);

router.route('/tasks/:id')
.get(TasksController.show)
.put(TasksController.update)
.delete(TasksController.destroy);


module.exports= router;