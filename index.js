/**
 * Module dependencies.
 */
var express = require('express'),
	app = express(),
	morgan = require('morgan'),
	i18n = require("i18n")

/**
 * Configuration
 */
var port     = process.env.PORT || 3000

app.use(morgan('dev'))
i18n.configure({
	locales:['en', 'de'],
    directory: __dirname + '/locales'
});
app.use(i18n.init);


 /**
 * Router
 */
require('./controllers/routes.js')(app);

app.listen(port);
console.log('The Server runs on port ' + port);