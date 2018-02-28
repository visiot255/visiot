var express = require('express');
var config = require('../config');
var Article = require('../models/models');


const createNew = function(req, res){

    var title = req.body.post_title;
    var content = req.body.post_content;
    var parent = req.body.post_parent;

    var newArticle = new Article({

    })
};

module.exports = {createNew};
