var express = require('express');
var router = express.Router();
var config = require('../config');

router.get('/resources', function(req, res){
  res.render('resources_HP', {config: config});
});

module.exports = router;
