var express = require('express');
var router = express.Router();
var config = require('../config');
var models = require('../models/models');
var Sequelize = require('sequelize');
//allows SQL operation like AND, NOT, OR...
var Op = Sequelize.Op
//Converts markdown into html.
var showdown = require('showdown');
var converter = new showdown.Converter();

router.get('/', function(req, res){
  models.article.findAll({
    where: {parent: 'root'}}).then(root => {
      res.render('resources', {config: config, root: root});
    })
});
//operations on selections are to avoid redundancy.
router.get('/:id', function(req, res){
  var idconv = req.params.id.split('_').join(' ');
    models.article.findOne({where: {title: idconv}}).then(article => {
      models.article.findOne({
        where: {title: article.parent}}).then(parent => {
          models.article.findAll({
            where: {
              parent: {
                [Op.and]: {
                  [Op.eq]: article.parent,
                  [Op.ne]: 'root'}
                },
              title: {
                [Op.ne]: article.title}
           }}).then(siblings => {
             models.article.findAll({
               where: {parent: article.title}}).then(children => {
                 models.article.findAll({
                   where: {
                     parent: 'root',
                     title: {
                       [Op.ne]: article.title}}}).then(root => {
                  var htmlContent = converter.makeHtml(article.content);
                  res.render('article', {config: config, content: htmlContent, children: children, parent: parent, siblings:siblings, root: root, article: article});
            })
          })
        })
      })
    })
  }
);


module.exports = router;
