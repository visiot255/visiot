var express = require('express');


const createNew = function(req, res){
  console.log(req.res.body);
};

module.exports = {createNew};
