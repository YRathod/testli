var mongoose = require('mongoose');

// Question Schema
var referenceModel = mongoose.Schema({
	
    videos:{
        type: [String]
    },
    urls:{
        type: [String]
    }
});

module.exports = referenceModel;