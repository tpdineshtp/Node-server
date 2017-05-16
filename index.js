/**
 * Module dependencies.
 */
var express = require('express'),
	app = express(),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	passport = require('passport')

/**
 * Configuration
 */
var port     = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));


 /**
 * Router
 */
require('./controllers/routes.js')(app);

app.listen(port);
console.log('The Server runs on port ' + port);
