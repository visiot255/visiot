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
    models.article.findOne({where: {title: article.parent}}).then(parent => {
      models.article.findAll({where: {parent: article.parent}}).then(siblings => {
        models.article.findAll({where: {parent: article.title}}).then(children => {
          var htmlContent = converter.makeHtml(article.content);
          res.render('article', {config: config, content: htmlContent, children: children, parent: parent, siblings:siblings})
        })
      })
    })
  })
}
)


module.exports = router;
