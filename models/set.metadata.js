var mongoose = require('mongoose');

var auditModel=require('./audit.model');

//User Schema
var setMetaData = mongoose.Schema({
	userid:{
        type : String //userid whom hole all questions
    },
    name:{
        type : String //userid whom hole all questions
    },
	start_date:{
		type: Date // Start date of set
    },
    expiry_date:{
		type: Date // Expiry date of set
	},
	attempt:{
		type: String // number of attept for this set
    },
    questions:{
        type: [String] //----this holds all ids
    },
    timer :{
        type: String // timer based if its none - zero value
    },
    correct_question :{
        type: [String] // all correct question
    },
    incorrect_question :{
        type: [String] //all incorrect question
    },
	audit:{
		type:auditModel,default:auditModel
    },
    attepted_date :{
        type: Date 
    },
    publish_date :{
        type: Date 
    },
	status : {
		type: String //---active in active data set------
 	}
	
});

var SetMetaData = module.exports = mongoose.model('setMetaData', setMetaData);

// Get SetMetaData by UserId
module.exports.getSetMetaDataByUserId = function(userid, callback){
	SetMetaData.find({"userid" : userid}, callback);
}

// //Get User
// module.exports.getUserByQuestionId = function(questionid, callback){
// 	SetMetaData.find({"questionid" : questionid}, callback);
// }

// //Get User
// module.exports.getUserQuestionById = function(id, callback){
// 	SetMetaData.findById(id, callback);
// }

// Add User
// module.exports.addUserQuestion = function(userquestion, callback){
// 	console.log('Create User' + userquestion);
// 	SetMetaData.create(userquestion, callback);
// }

// Update User
// module.exports.updateUserQuestion = function(id, user, callback){
// 	var options = {new: true}; 
// 	var query = {_id: id};
// 	var update = {
// 			userid: user.userid,
// 			questionid: user.questionid
// 	}
// 	console.log("New Object : " + JSON.stringify(update));
// 	SetMetaData.findOneAndUpdate(query, update, options, callback);
// }

// Delete User
module.exports.removeSetMetaDataByUserId = function(userid, callback){
	var query = {userid: userid};
	SetMetaData.remove(query, callback);
}