var mongoose = require('mongoose');

//Contact Schema
var contactSchema = mongoose.Schema({
	
	craetedby:{
		type: String
	},
	modifiedby:{
		type: String
	},
	createdate:{
		type: Date,
		default: Date.now
	},
	modifieddate:{
		type: Date,
		default: Date.now
	}
});
