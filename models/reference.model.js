var mongoose = require('mongoose');

// Question Schema
var referenceModel = mongoose.Schema({

    urls:{
        type: [String]//this can be video url , audio, image, social media url
    },
    text :{
        type: [String]
    }
});

module.exports = referenceModel;