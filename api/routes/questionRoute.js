var express = require('express');
var device = require('express-device');
var util = require('../helper/util.js');

var questionModel= require('../../models/question');
var deviceModel= require('../../models/device.js');


var router = express.Router();

//-----------------question----------------------
/**
 * Get All questions
 */
router.get('/question', function(req, res){
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
});

//-----------------All question----------------------

router.get('/allquestion', function(req, res){
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
});

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

router.get('/question/search/category=:category', function(req, res){
	console.log(req.params.category);
	questionModel.getQuestionByTags(req.params.category, function(err, result){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('questionModel -->'+ result.length);
		res.json(result);
	});
});

//----
/**
 * Search question by id
 */
router.get('/question/id/:search', function(req, res){
	questionModel.getQuestionById(req.params.search, function(err, question){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('questionModel -->'+ question);
		res.json(question);
	});
});

/**
 * Create new Question
 */
router.post('/question', function(req, res){
	var question = req.body;
	console.log(question);
	questionModel.addQuestion(question, function(err, question){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(question);
	});
});


//------Update Question by id-----
router.put('/question/:_id', function(req, res){
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
});

//------Delete Question by id-----
router.delete('/question/:_id', function(req, res){
	var id = req.params._id;
	questionModel.removeQuestion(id, function(err, question){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(question);
	});
});


module.exports = router
