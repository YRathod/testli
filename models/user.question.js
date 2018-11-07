var mongoose = require('mongoose');

var auditModel=require('./audit.model');

//User Schema
var userQuestion = mongoose.Schema({
	userid:{
        type : String	
    },
	questionid:{
		type: String
	},
	attempt:{
		type: String
	},
	dataset:{
		type: [String]
	},
	audit:{
		type:auditModel,default:auditModel
	},
	status : {
		type: String
	}
	
});

var UserQuestion = module.exports = mongoose.model('userQuestion', userQuestion);

// Get User
module.exports.getQuestionByUserId = function(userid, callback){
	UserQuestion.find({"userid" : userid}, callback);
}

//Get User
module.exports.getUserByQuestionId = function(questionid, callback){
	UserQuestion.find({"questionid" : questionid}, callback);
}

//Get User
module.exports.getUserQuestionById = function(id, callback){
	UserQuestion.findById(id, callback);
}

// Add User
module.exports.addUserQuestion = function(userquestion, callback){
	console.log('Create User' + userquestion);
	UserQuestion.create(userquestion, callback);
}

// Update User
module.exports.updateUserQuestion = function(id, user, callback){
	var options = {new: true}; 
	var query = {_id: id};
	var update = {
			userid: user.userid,
			questionid: user.questionid
	}
	console.log("New Object : " + JSON.stringify(update));
	UserQuestion.findOneAndUpdate(query, update, options, callback);
}

// Delete User
module.exports.removeUserQuestion = function(id, callback){
	var query = {_id: id};
	UserQuestion.remove(query, callback);
}