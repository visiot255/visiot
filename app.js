var express = require('express');
var ejs = require('ejs');
app = express();

app.get('/', (req, res) => res.render('accueil.ejs'));
app.use('/staticres', express.static(__dirname + '/views/resources'))
app.use('/staticcss', express.static(__dirname+'/views/css'))






app.listen(3000, () => console.log('Hello world'));
app.set('view engine', 'ejs');
