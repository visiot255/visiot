var Sequelize = require('sequelize');
var config = require ('../config');

var seq = new Sequelize('articles', secrets.username, secrets.passwords, {
  host: 'localhost',
  dialect: 'mariadb',
  operatorAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});

seq
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
