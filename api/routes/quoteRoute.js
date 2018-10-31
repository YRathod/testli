var express = require('express');
var device = require('express-device');
var util = require('../helper/util.js');
var multer  = require('multer')


var quoteModel= require('../../models/quote');
var deviceModel= require('../../models/device');

var router = express.Router();
//-----------------quotes----------------------
router.get('/quotes', function(req, res){
	//console.log("List of quoteModel-->");
	//  console.log(req.quotes['user-agent'].toLowerCase());
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
	
	
	quoteModel.getQuotes(function(err, quotes){
		if(err){
			console.log(err);
			throw err;
		}
		//console.log("List of quoteModel-->" + quotes);
		res.json(quotes);
	});
});


router.get('/quotes/random', function(req, res){

	quoteModel.getQuoteRandom(function(err, quotes){
		if(err){
			console.log(err);
			throw err;
		}
		//console.log(quotes);
		res.json(quotes);
	});
});
//---Search By Name-----------
router.get('/quotes/:search', function(req, res){
	quoteModel.getQuotesByName(req.params.search, function(err, quote){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('quoteModel -->'+ quote);
		res.json(quote);
		
		
	});
});




router.get('/quotes/id/:search', function(req, res){
	quoteModel.getQuoteById(req.params.search, function(err, quote){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('quoteModel -->'+ quote);
		res.json(quote);
	});
});

router.post('/quotes', function(req, res){
	var quote = req.body;

	quoteModel.addQuote(quote, function(err, quote){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(quote);
	});
});
/*router.post('/up', upload.any(),function(req, res){
	res.send("jhgjjhjkl");

});*/
router.put('/quotes/:_id', function(req, res){
	var id = req.params._id;
	var quote = req.body;
	console.log(quote);
	quoteModel.updateQuote(id, quote, function(err, quote){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(quote);
	});
});

router.delete('/quotes/:_id', function(req, res){
	var id = req.params._id;
	quoteModel.removeQuote(id, function(err, quote){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(quote);
	});
});


module.exports = router
