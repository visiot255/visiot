var express = require('express');
var router = express.Router();

router.get('/resources', function(req, res){
  res.render('resources_HP');
});

module.exports = router;
