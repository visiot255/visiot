var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var app = express();

var css = express.static(__dirname + '/public');

var accueil = require('./routes/route_accueil.js');
var resources = require('./routes/route_resources');
var addArticles = require('./routes/route_add_articles');
var quizz = require('./routes/route_quizz');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.get('/', (req, res) => res.render('accueil.ejs'));
//app.use('/staticres', express.static(__dirname + '/views/resources'));
//app.use('/staticcss', express.static(__dirname + '/views/css'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', accueil, css);
app.use('/resources', resources, css);
app.use('/addarticles', addArticles, css);
app.use('/quizz', quizz,css)

app.listen(3000, () => console.log('Hello world'));

module.exports = app;
