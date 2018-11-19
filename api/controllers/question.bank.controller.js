
var questionModel= require('../../models/question.bank');
var deviceModel= require('../../models/device.js');
//-----------------question----------------------
/**
 * Get All questions
 */
exports.getQuestion =  function(req, res){
	res.json({'msg':'Please add filter criteria based on subject since data might be very huge' });
	//console.log("List of questionModel-->");
	//console.log(req.headers['user-agent'].toLowerCase());
	//-----Adding device entry----------
	//console.log(util.getDeviceDetails(req));
	
	// deviceModel.addDevice(util.getDeviceDetails(req),function(err){
	// 	if(err){
	// 		console.log(err);
	// 		throw err;
	// 	}else{
	// 		console.log(req.headers['user-agent'].toLowerCase());
	// 	}
	// });
	//-----Adding device entry----------
	
	
	// questionModel.getQuestion(function(err, question){
	// 	if(err){
	// 		console.log(err);
	// 		throw err;
	// 	}
	// 	//console.log("List of questionModel-->" + question);
	// 	res.json(question);
	// });
};

//-----------------All question----------------------

exports.findAll =  function(req, res){
	res.json({'msg':'Please add filter criteria based on subject since data might be very huge' });


	//console.log("List of questionModel-->");
	//console.log(req.headers['user-agent'].toLowerCase());
	//-----Adding device entry----------
	//console.log(util.getDeviceDetails(req));
	
//	deviceModel.addDevice(util.getDeviceDetails(req),function(err){
//		if(err){
//			console.log(err);
//			throw err;
//		}else{
//			console.log(req.headers['user-agent'].toLowerCase());
//		}
//	});
	//-----Adding device entry----------
	
	
	// questionModel.getAllQuestion(function(err, question){
	// 	if(err){
	// 		console.log(err);
	// 		throw err;
	// 	}
	// 	//console.log("List of questionModel-->" + question);
	// 	res.json(question);
	// });
};

//---Search By Name-----------
// router.get('/question/:search', function(req, res){
// 	questionModel.getQuestionByName(req.params.search, function(err, question){
// 		if(err){
// 			console.log(err);
// 			throw err;
// 		}
// 		console.log('questionModel -->'+ question);
// 		res.json(question);
		
		
// 	});
// });

// router.get('/question/author/:search', function(req, res){
// 	questionModel.getQuestionByAuthor(req.params.search, function(err, question){
// 		if(err){
// 			console.log(err);
// 			throw err;
// 		}
// 		console.log('questionModel -->'+ question);
// 		res.json(question);
// 	});
// });

// router.get('/question/:search', function(req, res){
// 	questionModel.getQuestionByQuestion(req.params.search, function(err, question){
// 		if(err){
// 			console.log(err);
// 			throw err;
// 		}
// 		console.log('questionModel -->'+ question);
// 		res.json(question);
// 	});
// });

exports.searchByCategory = function(req, res){
	//console.log(req.params.category);
	questionModel.getQuestionByCategory(req.params.category, function(result){
		res.json(result);
	});
};


exports.searchByAuthor = function(req, res){
	//console.log(req.params.category);
	questionModel.getQuestionByAuthor(req.params.author, function(result){
		res.json(result);
	});
};
//----
/**
 * Search question by id
 */
exports.getQuestionById =  function(req, res){
	questionModel.getQuestionById(req.params.search, function(err, question){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(question);
	});
};

/**
 * Create new Question
 */
exports.createQuestion = function(req, res){
	var question = req.body;
	console.log(question);
	questionModel.addQuestion(question, function(err, question){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(question);
	});
};


//------Update Question by id-----
exports.updateQuestion =  function(req, res){
	var id = req.params._id;
	var question = req.body;
	console.log(question);
	questionModel.updateQuestion(id, question, {}, function(err, question){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(question);
	});
};

//------Delete Question by id-----
exports.deleteQuestion = function(req, res){
	var id = req.params._id;
	questionModel.removeQuestion(id, function(err, question){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(question);
	});
};


// module.exports = router
