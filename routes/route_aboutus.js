var express = require('express');
var router = express.Router();
var config = require('../config');

router.get('/', function(req, res){
  res.render('aboutus', {config: config});
});

module.exports = router;
