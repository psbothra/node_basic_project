var express = require('express');
var path = require('path');
var http = require('http');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config/default');
var productsRoutes = require('./routes/products');
var productsController = require('./app/controllers/products-controller');

var fs = require('fs');

var app = express();

// get an instance of the express Router
var router = express.Router();

// Workers can share any TCP connection
app.listen(config.port, function() {
  console.log("Server listening to http on port " + config.port);
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/api', router);

app.use('/', productsController.get);
//set up the routes
productsRoutes(router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(req, res, next) {
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  next();
});

module.exports = app;
