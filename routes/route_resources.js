var express = require('express');
var router = express.Router();
var config = require('../config');
var models = require('../models/models')
var showdown = require('showdown');
var converter = new showdown.Converter();

router.get('/', function(req, res){
  res.render('resources', {config: config});
});

router.get('/:id', function(req, res){
  models.article.findOne({where:{title: req.params.id}}).then(article => {
    var htmlContent = converter.makeHtml(article.content);
    console.log(htmlContent);
    res.render('article', {config: config, content: htmlContent})
  })
}
)


module.exports = router;
