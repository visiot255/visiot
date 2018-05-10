var express = require('express');
var router = express.Router();
var config = require('../config');
var models = require('../models/models');
var controller = require('../controller/controller_modify_articles');
var Sequelize = require('sequelize');

// Renders normal page where you can add an article.
router.get('/', function(req,res){
  res.render('modify_articles', {config: config, article: undefined});
});

module.exports = router;
