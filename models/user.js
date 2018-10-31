var mongoose = require('mongoose');

var auditModel=require('./audit.model');

//User Schema
var userSchema = mongoose.Schema({
	username:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	address:{
		type: String
	},
	city:{
		type: String
	},
	state:{
		type: String
	},
	country:{
		type: String
	},
	email:{
		type: [String]
	},
	phone:{
		type: [String]
	},
	active:{
		type: Boolean
	},
	audit:{
		type:auditModel,default:auditModel
	},
	status : {
		type: String
	}
	
});

var User = module.exports = mongoose.model('User', userSchema);

// Get Users
//Get Books
module.exports.getUsers = function(callback, limit){
	User.find(callback).limit(limit);
}


// Get User
module.exports.getUserByUserName = function(username, callback){
	User.find({"username" : username}, callback);
}

//Get User
module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}
// Add User
module.exports.addUser = function(user, callback){
	console.log('Create User' + user);
	User.create(user, callback);
}

// Update User
module.exports.updateUser = function(id, user, callback){
	var options = {new: true}; 
	var query = {_id: id};
	var update = {
			firstname: user.firstname,
			lastname: user.lastname,
			username: user.username,
			address: user.address,
			city : user.city,
			state: user.state,
			country: user.country,
			email: user.email,
			phone: user.phone,
			modifieddate :  new Date(),
			modifiedby : "SYSTEM"
	}
	
	console.log("New Object : " + JSON.stringify(update));
	
	
	User.findOneAndUpdate(query, update, options, callback);
}

// Delete User
module.exports.removeUser = function(id, callback){
	var query = {_id: id};
	User.remove(query, callback);
}