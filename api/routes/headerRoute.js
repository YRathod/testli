var express = require('express');
var device = require('express-device');
var util = require('../helper/util.js');
var multer  = require('multer')


var headerModel= require('../../models/header');
var deviceModel= require('../../models/device');

var router = express.Router();
//-----------------headers----------------------
router.get('/headers', function(req, res){
	//console.log("List of headerModel-->");
	//  console.log(req.headers['user-agent'].toLowerCase());
	//-----Adding device entry----------
	//console.log(util.getDeviceDetails(req));
	console.log("Hello World");
	deviceModel.addDevice(util.getDeviceDetails(req),function(err){
		if(err){
			console.log(err);
			throw err;
		}else{
			console.log(req.headers['user-agent'].toLowerCase());
		}
	});
	//-----Adding device entry----------
	
	
	headerModel.getHeaders(function(err, headers){
		if(err){
			console.log(err);
			throw err;
		}
		//console.log("List of headerModel-->" + headers);
		res.json(headers);
	});
});

//---Search By Name-----------
router.get('/headers/:search', function(req, res){
	headerModel.getHeadersByName(req.params.search, function(err, header){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('headerModel -->'+ header);
		res.json(header);
		
		
	});
});




router.get('/headers/id/:search', function(req, res){
	headerModel.getHeaderById(req.params.search, function(err, header){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('headerModel -->'+ header);
		res.json(header);
	});
});

router.post('/headers', function(req, res){
	var header = req.body;

	headerModel.addHeader(header, function(err, header){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(header);
	});
});
/*router.post('/up', upload.any(),function(req, res){
	res.send("jhgjjhjkl");

});*/
router.put('/headers/:_id', function(req, res){
	var id = req.params._id;
	var header = req.body;
	console.log(header);
	headerModel.updateHeader(id, header, function(err, header){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(header);
	});
});

router.delete('/headers/:_id', function(req, res){
	var id = req.params._id;
	headerModel.removeHeader(id, function(err, header){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(header);
	});
});


module.exports = router
