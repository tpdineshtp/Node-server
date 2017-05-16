var model = require('../models/schema');
var LocalStrategy = require("passport-local").Strategy
var passport = require('passport')

module.exports = function(app) {

  passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log("*"*40)
    console.log(password)
    console.log("*"*40)
    model.User.findOne({ username: "dinesh" }, function (err, user) {
      console.log("*"*40)
      console.log(user.password)
      console.log("*"*40)

      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!(user.password == "password")) { return done(null, false); }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


app.post('/login',
  passport.authenticate('local', { failureRedirect: '/failed', successRedirect: '/success' }),
  function(req, res) {
    res.redirect('/hello');
  });


	app.get('/', function(req, res){
	    res.end("Hello Developer");
	});

  app.post('/register',function(req,res){
		var name = req.body.username;
        var password = req.body.password;
        	console.log(name);
        	console.log(password);
        var newuser = new model.User();
        newuser.username = name;
        newuser.password = password;
        newuser.save(function(err,savedUser){
        	if(err){
        		console.log(err);
        		return res.status(500).send();
        	}
        	return res.status(200).send();
        })

	});

}
