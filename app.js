var express = require('express');
var ejs = require('ejs');
app = express();

app.get('/', (req, res) => res.render('accueil.ejs'));






app.listen(3000, () => console.log('Hello world'));
app.set('view engine', 'ejs');
