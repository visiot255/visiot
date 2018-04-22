var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var app = express();

var css = express.static(__dirname + '/public');

var router = require('./router')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.get('/', (req, res) => res.render('accueil.ejs'));
//app.use('/staticres', express.static(__dirname + '/views/resources'));
//app.use('/staticcss', express.static(__dirname + '/views/css'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router.accueil, css);
app.use('/resources', router.resources, css);
app.use('/addarticles', router.addArticles, css);
app.use('/quiz', router.quiz,css);
app.use('/aboutus', router.aboutus,css);

app.listen(3000, () => console.log('Hello world'));

module.exports = app;
