var express = require('express');
var device = require('express-device');
var jwt = require('jsonwebtoken');
var bcrypt=require('bcryptjs');
var userModel= require('../../models/user');
var deviceModel= require('../../models/device');

var config = require('config');


var router = express.Router();

// -----------------users----------------------
router.get('/login', function(req,res){
	
});



router.post('/token', function(req, res) {
	// find the user
	console.log(req.body);
	console.log(config.secret);
	userModel.findOne({
	    username: req.body.username
	  }, function(err, user) {

	    if (err) throw err;

	    if (!user) {
	      res.json({ success: false, message: 'Authentication failed. User not found.' });
	    } else if (user) {

	      // check if password matches
	      if (user.password != req.body.password) {
	        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
	      } else {
	        // if user is found and password is right
	        // create a token with only our given payload
	    	// we don't want to pass in the entire user since that has the password
			const payload = {
				username: user.username,
				password: user.password
			};

	        var token = jwt.sign(payload, config.secret);

	        // return the information including token as JSON
	        res.json({
	          success: true,
	          message: 'Enjoy your token!',
	          token: token
	        });
	      }   

	    }

	  });
	});


	router.post('/register', function(req, res) {
		// find the user
		//console.log(req.body);
		//console.log(config.secret);
		var user =  req.body;
		// user.username = req.body.username;
		// user.password = req.body.password
		//console.log("Create new Users");

		//console.log(user);
		userModel.findOne({
			username: req.body.username
		  }, function(err, user) {
	
			if(err){
				console.log('---->' + err);
				res.sendStatus(404);
				throw err;
			}
	
			if (user) {
				//console.log('In Side else');
				const payload = {
					username: user.username,
					password: user.password
				};

				var token = jwt.sign(payload, config.secret);
				console.log(token);
				res.json({
					success: true,
					message: 'User is already register with application',
					token: token
				  });
				  
			}else{
				user =  req.body; 

				// var hashPw=bcrypt.hashSync(req.body.password,8);
				var hashPw=req.body.password;
				var reg_instance=new userModel({
					username:req.body.username,
					password:hashPw
				});
				
				userModel.addUser(reg_instance, function(err, user_reg){
					if(err){
						console.log(err);
						res.sendStatus(404);
						throw err;
					}
					
					var token = jwt.sign({id:user_reg._id},config.secret,{
						expiresIn: 86400 // expires in 24 hours
					});
					console.log(token);
					user.token = token;

					res.status(200).send({auth:true,token:token});
		
				});

			}
		  });
	}); 
	
router.get('/users', function(req, res){
	// console.log("List of userModel-->");
	console.log(req.headers['user-agent'].toLowerCase());
	// -----Adding device entry----------
	var devicePayload ={};
	devicePayload.name = req.headers['user-agent'].toLowerCase();
	devicePayload.type = req.headers['user-agent'].toLowerCase();
	devicePayload.httpversion = req.headers['user-agent'].toLowerCase();
	deviceModel.addDevice(devicePayload,function(err){
		if(err){
			console.log(err);
			throw err;
		}else{
			console.log(devicePayload);
		}
	});
	// -----Adding device entry----------
	
	
	userModel.getUsers(function(err, users){
		if(err){
			console.log(err);
			throw err;
		}
		// console.log("List of userModel-->" + users);
		res.json(users);
	});
});

// ---Search By Name-----------
router.get('/users/:search', function(req, res){
	userModel.getUsersByName(req.params.search, function(err, user){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('userModel -->'+ user);
		res.json(user);
		
		
	});
});

router.get('/users/zipcode/:search', function(req, res){
	userModel.getUsersByZipcode(req.params.search, function(err, user){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('userModel -->'+ user);
		res.json(user);
	});
});

router.get('/users/city/:search', function(req, res){
	userModel.getUsersByCity(req.params.search, function(err, user){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('userModel -->'+ user);
		res.json(user);
	});
});


router.get('/users/id/:search', function(req, res){
	userModel.getUserById(req.params.search, function(err, user){
		if(err){
			console.log(err);
			throw err;
		}
		console.log('userModel -->'+ user);
		res.json(user);
	});
});

router.post('/users', function(req, res){
	
	var user = req.body;
	console.log("Create new Users");
	userModel.addUser(user, function(err, user){
		if(err){
			console.log(err);
			res.sendStatus(404);
			throw err;
		}
		res.json(user);
	});
});

router.put('/users/:id', function(req, res){
	var id = req.params.id;
	var newUser = req.body;

	userModel.updateUser(id, newUser, function(err, newUser){
		if(err){
			console.log(err);
			throw err;
		}
		console.log("Update User :" + JSON.stringify(newUser));
		res.json(newUser);
	});
});

router.delete('/users/:_id', function(req, res){
	var id = req.params._id;
	userModel.removeUser(id, function(err, user){
		if(err){
			console.log(err);
			throw err;
		}
		res.json(user);
	});
});


module.exports = router
