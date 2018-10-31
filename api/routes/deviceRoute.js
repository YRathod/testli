var express = require('express');

var deviceModel= require('../../models/device')

var router = express.Router();

//-----------------devices----------------------

router.get('/devices', function(req, res){
	console.log("List of deviceModel-->");
	console.log(deviceModel);
	deviceModel.getDevices(function(err, devices){
		if(err){
			throw err;
		}
		console.log("List of deviceModel-->" + devices);
		res.json(devices);
	});
});

router.get('/devices/:search', function(req, res){
	deviceModel.getDevicesByName(req.params.search, function(err, deviceModel){
		if(err){
			throw err;
		}
		res.json(deviceModel);
	});
});

router.get('/devices/:_id', function(req, res){
	deviceModel.getDeviceById(req.params._id, function(err, deviceModel){
		if(err){
			throw err;
		}
		res.json(deviceModel);
	});
});

router.post('/devices', function(req, res){
	var device = req.body;
	console.log(device);
	deviceModel.addDevice(device, function(err, deviceModel){
		if(err){
			throw err;
		}
		res.json(deviceModel);
	});
});

router.put('/devices/:_id', function(req, res){
	var id = req.params._id;
	var deviceModel = req.body;
	deviceModel.updateDevice(id, book, function(err, deviceModel){
		if(err){
			throw err;
		}
		res.json(deviceModel);
	});
});

router.delete('/devices/:_id', function(req, res){
	var id = req.params._id;
	deviceModel.removeDevice(id, function(err, deviceModel){
		if(err){
			throw err;
		}
		res.json(deviceModel);
	});
});


module.exports = router
