var express = require('express');

var app = express();

//this set up to see the templates with .ejs
app.set('view engine', 'ejs');

var routes = require('./routes')
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//Routes
//home
app.get('/', routes.home);

//movie_single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

//not found
app.get('*', routes.notFound);

//this display the message on the terminal
app.listen(3000, function(){
  console.log("the application is running on localhost 3000");
});
