var model = require('../models/schema');
module.exports = function(app) {

	app.get('/', function(req, res){
	    res.end("Hello Developer");
	});

  app.post('/register',function(req,res){
		var name = req.body.Name;
        var password = req.body.Password;
        	console.log(name);
        	console.log(password);
        var newuser = new model.User();
        newuser.Name = name;
        newuser.Password = password;
        newuser.save(function(err,savedUser){
        	if(err){
        		console.log(err);
        		return res.status(500).send();
        	}
        	return res.status(200).send();
        })

	});

}
