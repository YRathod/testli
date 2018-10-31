var express = require('express');
var device = require('express-device');
var util = require('../helper/util.js');

var cityModel= require('../../models/city');
var deviceModel= require('../../models/device');


var router = express.Router();

//-----------------city----------------------

router.get('/city', function(req, res){
	//console.log("List of cityModel-->");
	//console.log(req.headers['user-agent'].toLowerCase());
	//-----Adding device entry----------
	//console.log(util.getDeviceDetails(req));
	
	deviceModel.addDevice(util.getDeviceDetails(req),function(err){
		if(err){
			console.log(err);
			throw err;
		}else{
			console.log(req.headers['user-agent'].toLowerCase());
		}
	});
	//-----Adding device entry----------
	
	
	cityModel.getCity(function(err, city){
		if(err){
			console.log(err);
			throw err;
		}
		//console.log("List of cityModel-->" + city);
		res.json(city);
	});
});

//-----------------All city----------------------

router.get('/allcity', function(req, res){
	//console.log("List of cityModel-->");
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
	
	
	cityModel.getAllCity(function(err, city){
		if(err){
			console.log(err);
			throw err;
		}
		//console.log("List of cityModel-->" + city);
		res.json(city);
	});
});

//---Search By Name-----------
router.get('/city/:search', function(req, res){
	cityModel.getCityByName(req.params.search, function(err, city){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('cityModel -->'+ city);
		res.json(city);
		
		
	});
});

router.get('/city/zipcode/:search', function(req, res){
	cityModel.getCityByZipcode(req.params.search, function(err, city){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('cityModel -->'+ city);
		res.json(city);
	});
});

router.get('/city/city/:search', function(req, res){
	cityModel.getCityByCity(req.params.search, function(err, city){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('cityModel -->'+ city);
		res.json(city);
	});
});


router.get('/city/id/:search', function(req, res){
	cityModel.getCityById(req.params.search, function(err, city){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('cityModel -->'+ city);
		res.json(city);
	});
});

router.post('/city', function(req, res){
	var city = req.body;
	console.log(city);
	cityModel.addCity(city, function(err, city){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(city);
	});
});

router.put('/city/:_id', function(req, res){
	var id = req.params._id;
	var city = req.body;
	console.log(city);
	cityModel.updateCity(id, city, {}, function(err, city){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(city);
	});
});

router.delete('/city/:_id', function(req, res){
	var id = req.params._id;
	cityModel.removeCity(id, function(err, city){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(city);
	});
});


module.exports = router
