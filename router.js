var accueil = require('./routes/route_accueil.js');
var resources = require('./routes/route_resources');
var addArticles = require('./routes/route_add_articles');
var quiz = require('./routes/route_quiz');
var aboutus = require('./routes/route_aboutus');
var modifyArticles = require('./routes/route_modify_articles.js');

module.exports = {
    accueil,
    resources,
    addArticles,
    quiz,
    aboutus,
    modifyArticles
}
