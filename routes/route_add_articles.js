var express = require('express');
var router = express.Router();
var config = require('../config');
var controller = require('../controller/controller_add_articles');

router.get('/', function(req,res){
  res.render('add_articles', {config: config});
});

router.route('/createNew').post(controller.createNew);

module.exports = router;
