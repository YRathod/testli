var mongoose = require('mongoose');
//quoteModel Schema
var quoteSchema = mongoose.Schema({
	
	quote:{
		type: String,
		required: true
	},
	author:{
		type: String
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


var Quote = module.exports = mongoose.model('Quote', quoteSchema);

// Get Quotes
module.exports.getQuotes = function(callback, limit){
	Quote.find(callback).limit(limit);
}

function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }

//Get Quotes
module.exports.getQuoteRandom = function(callback){
	  var quote =[]; 
	  var random = Math.floor(Math.random() * 3)
	  //console.log(random);
	  
//	  //--  Both are working ----
//	  Quote.findOne(callback).skip(random).limit(1).exec()
//	    .then(function(user){
//	      console.log(user);
//	      callback(user);
//	    });
	  
	  
	  Quote.findOne(callback).skip(random).limit(1).then(function (quote) {
		  //console.log(quote);
		  callback(quote);
	  }, function(err){
		  console.log("Error in connecting database " + err);
		  callback(err);
	  });	

}

// Get Quote
module.exports.getQuoteById = function(id, callback){
	Quote.findById(id, callback);
}

module.exports.getQuotesByQuote = function(quote , callback, limit){
	Quote.find({'quote' : new RegExp(quote,'i')},callback).limit(limit);
}


// Add Quote
module.exports.addQuote = function(quote, callback){
	Quote.create(quote, callback);
}

// Update Quote
module.exports.updateQuote = function(id, quote, callback){
	var options = {new: true}; 
	var query = {_id: id};
	var update = {
			quote: quote.quote,
			author: quote.author
	}
	Quote.findOneAndUpdate(query, update, options, callback);
}

// Delete Quote
module.exports.removeQuote = function(id, callback){
	var query = {_id: id};
	Quote.remove(query, callback);
}