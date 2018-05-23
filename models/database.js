var Sequelize = require('sequelize');
var config = require ('../config');
var secrets = require('../secrets');

//username, password and host are stored in secret.js
var seq = new Sequelize('article', secrets.user, secrets.password, {
  host: secrets.host,
  dialect: 'mysql',
  operatorAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});

// checks that the connection with the server is established.
seq
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  seq.sync();

module.exports = seq;
