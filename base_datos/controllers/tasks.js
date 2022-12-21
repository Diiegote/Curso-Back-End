const Task= require("../models").Task;

module.exports = {
   index:(req,res)=>{
      Task.findAll().then((tasks)=>{
        res.render("tasks/index",{tasks});
      })
   },
   show:(req,res)=>{
      Task.findByPk(req.params.id).then((task)=>{
         res.render("tasks/show",{task});
      });
   },
   edit:(req,res)=>{
      Task.findByPk(req.params.id).then((task)=>{
         res.render("tasks/edit",{task});
      });
   },
   destroy:(req,res)=>{
      Task.destroy({
         where:{
            id: req.params.id
         }
      }).then((contadorDeElementosEliminados)=>{
         res.redirect("/tasks")
      })
   },
   create:(req,res)=>{
      Task.create({
         description: req.body.description
      }).then(results=>{
         res.json(results);
      }).catch(err=>{
         console.error(err);
         res.json(err)
      })
   },
   update:(req,res)=>{
      Task.update({description: req.body.description},{
         where:{
            id: req.params.id
         }
      }).then((results)=>{
         res.redirect('/tasks/'+req.params.id);
      })
   },
   new:(req,res)=>{
      res.render('tasks/new');
   }
};