var express = require('express');
var config = require('../config');
var model = require('../models/models');
var Sequelize = require('sequelize');

const createNew = function(req, res){

    var title = req.body.post_title;
    var titleId = title.split(' ').join('_');
    var content = req.body.post_content;
    var parent = req.body.post_parent;

    model.article.findOrCreate({where:{title: title}, defaults: {content: content, parent: parent}})
    .spread((article, created) => {
        console.log(article.get({
            plain:true
        }))
        console.log(created)
        if (created){
            console.log('article added to database');
        } else {
            console.log('article already exists')
        }
        res.redirect(config.urlAccueil)
    })
    console.log('Article added to the database');
};

module.exports = {
    createNew
};
