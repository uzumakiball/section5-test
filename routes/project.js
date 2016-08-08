var express = require('express');
var router = express.Router();

var models = require("../models");

/* GET home page. */
router.get('/projects', function(req, res) {
  models.Projects.all().then(function(projectList) {
      //console.log(projectList);
    res.json(projectList);
  });
});

router.get('/projects/:id',function(req,res){
    var _id=req.params.id;
    models.Projects.find({where:{id:_id}}).then(function(projectList){
       res.json(projectList);
    });

});

router.post('/projects', function(req, res) {
  models.Projects
        .build({
            projectName: req.body.projectName,
            completed: false})
        .save()
        .then(function() {
          models.Tasks.findAll({}).then(function(projectList) {
                res.render('projectview', {projects: projectList});
            });
        });
});

router.put('/projects/:id', function(req, res) {
    var _id=req.params.id;
    models.Projects.find({
    where: {
      id: _id
    }
  }).then(function(project) {
    if(project) {
      project.updateAttributes({
        projectName: req.body.projectName,
        completed: req.body.completed
      }).then(function(project) {
        res.send(project);
      });
    }
  });
});

router.delete('/projects/:id', function(req, res) {
    var _id=req.params.id;
    models.Projects.destroy({
    where: {
      id: _id
    }
  }).then(function(project) {
    res.json(project);
  });
});

module.exports = router;
