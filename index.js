/**
 * Module dependencies.
 */
var express = require('express'),
	app = express(),
	morgan = require('morgan')

/**
 * Configuration
 */
var port     = process.env.PORT || 3000

app.use(morgan('dev'))


 /**
 * Router
 */
require('./controllers/routes.js')(app);

app.listen(port);
console.log('The Server runs on port ' + port);