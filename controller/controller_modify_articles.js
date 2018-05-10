var express = require('express');
var config = require('../config');
var model = require('../models/models');
var Sequelize = require('sequelize');
/*
const modifyOld = function(req, res){

    var title = req.body.post_title;
    var titleId = title.split(' ').join('_');
    var content = req.body.post_content;
    var parent = req.body.post_parent;

    model.article.update(
      {content: content},
      {where:{title: title}}).then(result => {
//        console.log(article.get({
//            plain:true
//        }))
//        console.log(result)
//    }).catch(err => {
//      throw new Error(err);
//      res.redirect(config.urlAccueil);
//    });
//    console.log('Article successfully changed');
//;
});

module.exports = {
    modifyOld
};

*/
