var express = require('express');
var config = require('../config');
var Article = require('../models/models');


const createNew = function(req, res){

    var title = req.body.post_title;
    var content = req.body.post_content;
    var parent = req.body.post_parent;

    Article.sync().then(() => {
      return Article.create({
        title: title,
        content: content,
        parent: parent
      })
    })
    console.log('Article added to the database');
};

module.exports = {createNew};
