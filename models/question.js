var mongoose = require('mongoose');

var auditModel=require('./audit.model');
var referenceModel=require('./reference.model');
// Question Schema
var questionSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
    },
    answers:{
        type: [String]
    },
    correctanswer:{
        type: [String]
    },
	type:{
		type: [String]
	},
	category:{
		type: [String]
    },
    explaination:{
		type: [String]
    },
    referencematerial:{
		type: referenceModel, default:referenceModel
	},
	audit:{
		type:auditModel,default:auditModel
	},
	status : {
		type: String
	}
});

var Question = module.exports = mongoose.model('Question', questionSchema);


// Get Questions
module.exports.getQuestions = function(callback, limit){
	
	Question.find(callback).limit(limit);
	//Question.find(function(err, objs){
	//	callback(objs);
	//});
}

// Get Question
module.exports.getQuestionById = function(id, callback){
	Question.findById(id, callback);
}

// Add Question
module.exports.addQuestion = function(question, callback){
	Question.create(question, callback);
}

// Update Question
module.exports.updateQuestion = function(id, question, options, callback){
	var query = {_id: id};
	var update = {
		title: question.title,
		genre: question.genre,
		description: question.description,
		author: question.author,
		publisher: question.publisher,
		pages: question.pages,
		image_url: question.image_url,
		buy_url: question.buy_url
	}
	Question.findOneAndUpdate(query, update, options, callback);
}

// Delete Question
module.exports.removeQuestion = function(id, callback){
	var query = {_id: id};
	Question.remove(query, callback);
}