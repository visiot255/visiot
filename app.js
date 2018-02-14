var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var app = express();

var accueil = require('./routes/route_accueil.js');
var resources = require('./routes/route_resources_HP');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.get('/', (req, res) => res.render('accueil.ejs'));
app.use('/staticres', express.static(__dirname + '/views/resources'));
app.use('/staticcss', express.static(__dirname + '/views/css'));



app.use('/', accueil);
app.use('/resources', resources);


app.listen(3000, () => console.log('Hello world'));

module.exports = app;
