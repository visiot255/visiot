var Sequelize = require('sequelize');
var db = require('./database');


var article = db.define('article', {
  title: {
    type: Sequelize.STRING,
  },
  parent: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.STRING,
  },
});

module.exports = {article};
