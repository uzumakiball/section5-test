var express = require('express');
var router = express.Router();

var models = require("../models");

/* GET home page. */
router.get('/', function(req, res) {
  models.Tasks.all().then(function(taskList) {
    res.render('index', {tasks: taskList});
  });
});

router.get('/task/:id',function(req,res){
    var _id=req.params.id;
    models.Tasks.find({where:{id:_id}}).then(function(taskList){
       res.json(taskList);
    });

});

router.post('/add-task', function(req, res) {
  models.Tasks
        .build({
            title: req.body.taskName,
            completed: false})
        .save()
        .then(function() {
          models.Tasks.findAll({}).then(function(taskList) {
                res.render('index', {tasks: taskList});
            });
        });
});

router.put('/task/:id', function(req, res) {
    var _id=req.params.id;
    models.Tasks.find({
    where: {
      id: _id
    }
  }).then(function(task) {
    if(task) {
      task.updateAttributes({
        title: req.body.title,
        completed: req.body.completed
      }).then(function(task) {
        res.send(task);
      });
    }
  });
});

router.delete('/task/:id', function(req, res) {
    var _id=req.params.id;
    models.Tasks.destroy({
    where: {
      id: _id
    }
  }).then(function(task) {
    res.json(task);
  });
});

module.exports = router;
