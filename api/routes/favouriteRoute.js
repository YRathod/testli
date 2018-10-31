//importing all required files
var express = require('express');
var device = require('express-device');
var util = require('../helper/util.js');
var multer  = require('multer')
var jwt = require('jsonwebtoken');
var favouriteModel= require('../../models/favourite');
var config = require('config');
var router = express.Router();


router.post('/favourite/:userid/:entityid', ensureToken, function(req, res){
	jwt.verify(req.token, config.secret, function(err, data) {
		if (err) {
		  res.sendStatus(403);
		} else {
			var favourite = req.body;
			favourite.userid = req.params.userid;
			favourite.entityid = req.params.entityid;
			favouriteModel.addFavourite(favourite, function(err, favourite){
				if(err){
					console.log(err);
					throw err;
				}
				console.log("Record saved ")
				res.json(favourite);
			});
		}
	});
});

router.delete('/favourite/:_id', ensureToken, function(req, res){
	jwt.verify(req.token, config.secret, function(err, data) {
		if (err) {
		  res.sendStatus(403);
		} else {
			var id = req.params._id;
			favouriteModel.removeFavourite(id, function(err, favourite){
				if(err){
					console.log(err);
					throw err;
				}
				res.json(favourite);
			});
		}
	});	
});

router.put('/favourite/:_id', ensureToken, function(req, res){
	jwt.verify(req.token, config.secret, function(err, data) {
		if (err) {
		  res.sendStatus(403);
		} else {
			var id = req.params._id;
			var favourite = req.body;
			console.log(favourite);
			favouriteModel.updateFavourite(id, favourite, function(err, favourite){
				if(err){
					console.log(err);
					throw err;
				}
				res.json(favourite);
			});
		}
	});		
});


//---Search Favourites By EntityId-----------
router.get('/favourite/entity/:entityid', function(req, res){
	jwt.verify(req.token, config.secret, function(err, data) {
		if (err) {
		  res.sendStatus(403);
		} else {
			favouriteModel.getFavouriteByEntityId(req.params.entityid, function(err, favourites){
				if(err){
					console.log(err);
					throw err;
				}
				console.log('FavouriteModel -->'+ favourites);
				res.json(favourites);		
			});
		}
	});			
});

//---Search Favourites By Username-----------
router.get('/favourite/user/:userid', function(req, res){
	jwt.verify(req.token, config.secret, function(err, data) {
		if (err) {
		  res.sendStatus(403);
		} else {
			favouriteModel.getFavouriteByUsername(req.params.username, function(err, favourites){
				if(err){
					console.log(err);
					throw err;
				}
				console.log('FavouriteModel -->'+ favourites);
				res.json(favourites);		
			});
		}
	});	
});

router.get('/favourite/:_id',function(req, res){
	jwt.verify(req.token, config.secret, function(err, data) {
		if (err) {
		  res.sendStatus(403);
		} else {
			var favourite = req.body
			favouriteModel.getFavouriteById(req.params.id, function(err, favourite){
				if(err){
					console.log(err);
					throw err;
				}
				res.json(favourite);
			});
		}
	});		
});



function ensureToken(req, res, next) {
	const bearerHeader = req.headers["authorization"];
	if (typeof bearerHeader !== 'undefined') {
	  const bearer = bearerHeader.split(" ");
	  const bearerToken = bearer[0];
	  req.token = bearerToken;
	  next();
	} else {
	  res.sendStatus(403);
	}
  }

module.exports = router