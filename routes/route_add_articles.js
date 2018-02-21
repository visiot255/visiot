var express = require('express');
var router = express.Router();
var config = require('../config');
var controller = require('../controller/controller_add_articles');

router.get('/', function(req,res){
  res.render('add_articles', {config: config});
});

router.post('/createNew', function(req, res){
  console.log(req.body);
});
module.exports = router;
