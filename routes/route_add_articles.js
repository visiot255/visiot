var express = require('express');
var router = express.Router();
var config = require('../config');
var models = require('../models/models');
var controller = require('../controller/controller_add_articles');
var Sequelize = require('sequelize');

// Renders normal page where you can add an article.
router.get('/', function(req,res){
  res.render('add_articles', {config: config, article: undefined});
});

//Renders page with a parent article title predefined
//Helps creating articles on a par with an article.
router.get('/:id', function(req,res){
  var idconv = req.params.id.split('_').join(' ');
  if (idconv = 'root'){
    res.render('add_articles', {config: config, article: {title: 'root'}});
  } else {
    models.article.findOne({where: {title: idconv}}).then(article => {
      console.log(article.parent);
      res.render('add_articles', {config: config, article: article});

  })
}
});

//Calls controller to add the newly defined article to the databse.
router.route('/createNew').post(controller.createNew);

module.exports = router;
