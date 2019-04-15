//Do one route at a time
//1. make sure you are requiring route page here
//2. you are passing it the app
//3. then in the actual route file, test the req, res

//HTML Routes and pages
//make your HTML routes in the routing/htmlRoutes as instructed
//do a get request "/" first, serve up the home.html file
//then, use require as demonstrated in Restaurant example
//make sure home.html has html written in it
//start the server, and go to localhost3000

// Require dependencies
var express = require("express");
var path = require("path");

// Creating instance of express server
var app = express();
var PORT = process.env.PORT || 3000;

// require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// Starts server listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
