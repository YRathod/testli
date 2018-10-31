var mongoose = require('mongoose');

//Contact Schema
var contactSchema = mongoose.Schema({
	
	firstname:{
		type: String
	},
	lastname:{
		type: String
	},
	address:{
		type: String
	},
	city:{
		type: String
	},
	state:{
		type: String
	},
	country:{
		type: String
	},
	email:{
		type: [String]
	},
	phone:{
		type: [String]
	},
	create_date: {
		type: Date,
		default: Date.now
	},
	modified_date: {
		type: Date,
		default: Date.now
    },
    createby: {
		type: String
	},
	modifiedby: {
		type: String
    },
    // 0- inactive , 1 - active , more status on the way
    status : {
        type: String
    }
});

var Contact = module.exports = mongoose.model('Contact', contactSchema);
