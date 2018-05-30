var Sequelize = require('sequelize');
var db = require('./database');

//defines the article table.
var article = db.define('article', {
  title: {
    type: Sequelize.STRING,
  },
  parent: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.TEXT,
  }
});

module.exports = {
  article
};
