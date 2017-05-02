var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
	Name : String,
	Password : String
});
mongoose.connect('mongodb://localhost:27017/master');
var User = mongoose.model('users', userSchema);
module.exports = {
	User: User
};
