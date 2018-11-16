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
		type: String
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

// Get Question for  tag names like Math + Algebra + Stastics 
module.exports.getQuestionByTags = function(category, callback){
	var preferCategory = category.split(",");
	console.log(preferCategory);
	
	// Question.find()
	// 	.where('category')
	// 	.in([preferCategory])
	// 	.exec(function (err, records) {
	// 		if(err){
	// 			console.log(err);
	// 			callback(err);
	// 		}
	// 		//console.log("records : " + records.length);
	// 		callback(records);//this will return to main routing method
	// 	});


		Question.
		find().
		where('category').in(preferCategory).
		exec(function (err, records) {
			if(err){
				console.log(err);
				callback(err);
			}
			//console.log("records : " + records.length);
			callback(records);//this will return to main routing method
		});

		// Question.
		// 	find({ }).
		// 	where('category').in([category]).
		// 	exec(function (records) {
		// 		console.log("records : " + records);
		// 		callback(records);//this will return to main routing method
		// 	}, function( err ) {
		// 		callback(err);
		// 	});
}

// Add Question
module.exports.addQuestion = function(question, callback){
	console.log(question);
	Question.create(question, callback);
}

// Update Question
module.exports.updateQuestion = function(id, question, options, callback){
	var query = {_id: id};
	var update = {
		title: question.title
		
	}
	Question.findOneAndUpdate(query, update, options, callback);
}

// Delete Question
module.exports.removeQuestion = function(id, callback){
	var query = {_id: id};
	Question.remove(query, callback);
}