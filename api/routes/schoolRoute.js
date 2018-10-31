var express = require('express');
var device = require('express-device');
var util = require('../helper/util.js');
var multer  = require('multer')


var schoolModel= require('../../models/school');
var deviceModel= require('../../models/device');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+'.jpg')
  }
});
//var upload = multer({ dest: 'public/uploads/' })
var upload = multer({ storage: storage });
var router = express.Router();

//-----------------schools----------------------

router.get('/schools', function(req, res){
	//console.log("List of schoolModel-->");
	//  console.log(req.headers['user-agent'].toLowerCase());
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
	
	
	schoolModel.getSchools(function(err, schools){
		if(err){
			console.log(err);
			throw err;
		}
		//console.log("List of schoolModel-->" + schools);
		res.json(schools);
	});
});

//---Search By Name-----------
router.get('/schools/:search', function(req, res){
	schoolModel.getSchoolsByName(req.params.search, function(err, school){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('schoolModel -->'+ school);
		res.json(school);
		
		
	});
});

router.get('/schools/zipcode/:search', function(req, res){
	schoolModel.getSchoolsByZipcode(req.params.search, function(err, school){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('schoolModel -->'+ school);
		res.json(school);
	});
});

router.get('/schools/city/:search', function(req, res){
	schoolModel.getSchoolsByCity(req.params.search, function(err, school){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('schoolModel -->'+ school);
		res.json(school);
	});
});


router.get('/schools/id/:search', function(req, res){
	schoolModel.getSchoolById(req.params.search, function(err, school){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('schoolModel -->'+ school);
		res.json(school);
	});
});

router.post('/schools', upload.any(), function(req, res){
	var school = req.body;
	//console.log(school);
	//var filename = _dirname + "/" + req.file.filename;
	//console.log(storage);
	school.schoolimages=[];
	for (var i in req.files) {
	  school.schoolimages.push(req.files[i].filename);
	  //console.log(req.files[i].filename+'.jpg');
	}
	
	
	console.log(school.schoolimages);
	
	schoolModel.addSchool(school, function(err, school){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(school);
	});
});
/*router.post('/up', upload.any(),function(req, res){
	res.send("jhgjjhjkl");

});*/
router.put('/schools/:_id', function(req, res){
	var id = req.params._id;
	var school = req.body;
	console.log(school);
	schoolModel.updateSchool(id, school, function(err, school){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(school);
	});
});

router.delete('/schools/:_id', function(req, res){
	var id = req.params._id;
	schoolModel.removeSchool(id, function(err, school){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(school);
	});
});


module.exports = router
