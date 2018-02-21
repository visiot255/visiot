var express = require('express');
var router = express.Router();
var config = require('../config');

// Should creat an article and save it in to a SQL database.
router.get('/', function(req,res){
  res.render('add_articles', {config: config});
});

module.exports = router;
