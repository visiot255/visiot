var express = require('express');
var config = require('../config');
var models = require('../models/models');
var Sequelize = require('sequelize');

//Fucntion that modifies an already existing article.
const modifyOld = function(req, res){
  var title = req.body.post_title;
  var titleId = title.split(' ').join('_');
  var content = req.body.post_content;

  models.article.update({content: content}, {where: {title: title}}).then(result =>{
    console.log(result);
    res.redirect(config.urlAccueil);
  });
};

module.exports = {
  modifyOld
};
