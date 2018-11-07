var express = require('express');
var device = require('express-device');
var util = require('../helper/util.js');

var userQuestionModel= require('../../models/set.metadata');
var deviceModel= require('../../models/device');


var router = express.Router();

//-----------------question----------------------

router.get('/question', function(req, res){
	//console.log("List of userQuestionModel-->");
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
	
	
	userQuestionModel.getQuestion(function(err, question){
		if(err){
			console.log(err);
			throw err;
		}
		//console.log("List of userQuestionModel-->" + question);
		res.json(question);
	});
});

//-----------------All question----------------------

router.get('/alluserquestion', function(req, res){
	res.json({'msg':'Please add filter criteria based on subject since data might be very huge' });


	//console.log("List of userQuestionModel-->");
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
	
	
	// userQuestionModel.getAllQuestion(function(err, question){
	// 	if(err){
	// 		console.log(err);
	// 		throw err;
	// 	}
	// 	//console.log("List of userQuestionModel-->" + question);
	// 	res.json(question);
	// });
});

//---Search By Name-----------
router.get('/userquestion/:search', function(req, res){
	userQuestionModel.getQuestionByName(req.params.search, function(err, question){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('userQuestionModel -->'+ question);
		res.json(question);
		
		
	});
});


router.get('/userquestion/question/:search', function(req, res){
	userQuestionModel.get(req.params.search, function(err, question){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('userQuestionModel -->'+ question);
		res.json(question);
	});
});


router.get('/userquestion/id/:search', function(req, res){
	userQuestionModel.getQuestionById(req.params.search, function(err, question){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('userQuestionModel -->'+ question);
		res.json(question);
	});
});

router.post('/userquestion', function(req, res){
	var question = req.body;
	console.log(question);
	userQuestionModel.addQuestion(question, function(err, question){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(question);
	});
});

router.put('/userquestion/:_id', function(req, res){
	var id = req.params._id;
	var question = req.body;
	console.log(question);
	userQuestionModel.updateQuestion(id, question, {}, function(err, question){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(question);
	});
});

router.delete('/userquestion/:_id', function(req, res){
	var id = req.params._id;
	userQuestionModel.removeQuestion(id, function(err, question){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(question);
	});
});


module.exports = router
