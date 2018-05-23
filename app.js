var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var app = express();

//defines access file for ejs files.
var publicFiles = express.static(__dirname + '/public');

var router = require('./router')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//define which route to call depending on the path asked by the user.
app.use('/', router.accueil, publicFiles);
app.use('/resources', router.resources, publicFiles);
app.use('/addarticles', router.addArticles, publicFiles);
app.use('/quiz', router.quiz, publicFiles);
app.use('/aboutus', router.aboutus, publicFiles);
app.use('/modifyarticles', router.modifyArticles, publicFiles);

app.listen(3000, () => console.log('Hello world'));

module.exports = app;
