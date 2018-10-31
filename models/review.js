var mongoose = require('mongoose');

var reviewSchema = mongoose.Schema({
    entityid : {
        type : String, 
        required :true
    },
    userid :{
        type : String
    },
    comment :{
        type : String
    },
    rating :{
        type : String
    },
	create_date:{
		type: Date,
		default: Date.now
	},
	modified_date:{
		type: Date,
		default: Date.now
    },
    createby:{
		type: String
	},
	modifiedby:{
		type: String
    },
    // 0- inactive , 1 - active , more status on the way
    status : 
    {
        type: String
    }

});

var Review = module.exports = mongoose.model('Review', reviewSchema);

// Get Reviews
module.exports.getReviews = function(callback, limit){
	Review.find(callback).limit(limit);
}

// Get Review
module.exports.getReviewById = function(id, callback){
	Review.findById(id, callback);
}

module.exports.getReviewByUserId = function(name , callback, limit){
	Review.find({'userid' : new RegExp(name,'i')},callback).limit(limit);
}

module.exports.getReviewsByEntityId = function(name , callback, limit){
	Review.find({'entityid' : new RegExp(name,'i')},callback).limit(limit);
}

// Add Review
module.exports.addReview = function(review, callback){
	Review.create(review, callback);
}

// Update Review
module.exports.updateReview = function(id, Review, callback){
	let options = {new: true}; 
	let query = {_id: id};
	let update = {
        entityid: Review.entityid,
		comment : Review.comment
	}
	Review.findOneAndUpdate(query, update, options, callback);
}

// Delete Review
module.exports.removeReview = function(id, callback){
	let query = {_id: id};
	Review.remove(query, callback);
}
