var express = require('express');
var router = express.Router();
var config = require('../config');
var controller = require('../controller/controller_add_articles');

// Should creat an article and save it in to a SQL database.
router.get('/', function(req,res){
  res.render('add_articles', {config: config});
});

router.post('/createNew', controller.createNew);

module.exports = router;
