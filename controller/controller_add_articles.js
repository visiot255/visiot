var express = require('express');
var config = require('../config');


const createNew = function(req, res){
  res.redirect(config.urlAccueil);
  console.log(req.body);
};

module.exports = {createNew};
