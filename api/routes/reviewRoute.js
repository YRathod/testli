//importing all required files
var express = require('express');
var device = require('express-device');
var util = require('../helper/util.js');
var multer  = require('multer')
var jwt = require('jsonwebtoken');
var reviewModel= require('../../models/review');
var config = require('config');
var router = express.Router();


router.post('/review/:userid/:entityid', ensureToken, function(req, res){
	

	jwt.verify(req.token, config.secret, function(err, data) {
		if (err) {
		  res.sendStatus(403);
		} else {
			var review = req.body;
			review.userid = req.params.userid;
			review.entityid = req.params.entityid;
			reviewModel.addReview(review, function(err, review){
				if(err){
					console.log(err);
					throw err;
				}
				console.log("Record saved ")
				res.json(review);
			});
		}
	});
});

router.delete('/review/:_id', ensureToken, function(req, res){
	jwt.verify(req.token, config.secret, function(err, data) {
		if (err) {
		  res.sendStatus(403);
		} else {
			var id = req.params._id;
			reviewModel.removeReview(id, function(err, review){
				if(err){
					console.log(err);
					throw err;
				}
				res.json(review);
			});
		}
	});	
});

router.put('/review/:_id', ensureToken, function(req, res){
	
	jwt.verify(req.token, config.secret, function(err, data) {
		if (err) {
		  res.sendStatus(403);
		} else {
			var id = req.params._id;
			var review = req.body;
			console.log(review);
		
			reviewModel.updateReview(id, review, function(err, review){
				if(err){
					console.log(err);
					throw err;
				}
				res.json(review);
			});
		}
	});		
});


//---Search Reviews By EntityId-----------
router.get('/review/entity/:entityid', function(req, res){
	jwt.verify(req.token, config.secret, function(err, data) {
		if (err) {
		  res.sendStatus(403);
		} else {
			reviewModel.getReviewsByEntityId(req.params.entityid, function(err, reviews){
				if(err){
					console.log(err);
					throw err;
				}
				console.log('ReviewModel -->'+ reviews);
				res.json(reviews);		
			});
		}
	});		
	
});

//---Search Reviews By Username-----------
router.get('/review/user/:userid', function(req, res){
	
	jwt.verify(req.token, config.secret, function(err, data) {
		if (err) {
		  res.sendStatus(403);
		} else {
			reviewModel.getReviewByUserId(req.params.username, function(err, reviews){
				if(err){
					console.log(err);
					throw err;
				}
				console.log('ReviewModel -->'+ reviews);
				res.json(reviews);		
			});
		}
	});			
});

router.get('/review/:_id',function(req, res){
	jwt.verify(req.token, config.secret, function(err, data) {
		if (err) {
		  res.sendStatus(403);
		} else {
			var review = req.body
			reviewModel.getReviewById(req.params.id, function(err, review){
				if(err){
					console.log(err);
					throw err;
				}
				res.json(review);
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