module.exports = function(app) {
	
	app.get('/', function(req, res){
	    res.send(res.__('hello'));
	});
}