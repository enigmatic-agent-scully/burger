var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;
var app = express();
var exphbs = require('express-handlebars');
var routes = require('./controllers/pizzasController');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(routes);

app.listen(PORT, () => {
  console.log(`app now listening at http://localhost:${PORT}`);
});