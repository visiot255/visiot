var express = require('express');
var router = express.Router();
var config = require('../config');
var models = require('../models/models');
var controller = require('../controller/controller_modify_articles');
var Sequelize = require('sequelize');

// Renders normal page where you can add an article.
router.get('/:id', function(req,res){
  var idconv = req.params.id.split('_').join(' ');
  models.article.findOne({where: {title: idconv}}).then(article =>{
    console.log(article.title);
    res.render('modify_articles', {config: config, article: article});
  })
});

router.route('/modifyOld').post(controller.modifyOld);


module.exports = router;
