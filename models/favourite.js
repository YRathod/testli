var mongoose = require('mongoose');

var favouriteSchema = mongoose.Schema({
    entityid : {
        type : String, 
        required :true
    },
    userid :{
        type : String, 
        required :true
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

var Favourite = module.exports = mongoose.model('Favourite', favouriteSchema);

// Get Favourites
module.exports.getFavourites = function(callback, limit){
	Favourite.find(callback).limit(limit);
}

// Get Favourite
module.exports.getFavouriteById = function(id, callback){
	Favourite.findById(id, callback);
}

module.exports.getFavouriteByUserId = function(name , callback, limit){
	Favourite.find({'userid' : new RegExp(name,'i')},callback).limit(limit);
}

module.exports.getFavouritesByEntityId = function(name , callback, limit){
	Favourite.find({'entityid' : new RegExp(name,'i')},callback).limit(limit);
}

// Add Favourite
module.exports.addFavourite = function(favourite, callback){
	Favourite.create(favourite, callback);
}

// Update Favourite
module.exports.updateFavourite = function(id, Favourite, callback){
	let options = {new: true}; 
	let query = {_id: id};
	let update = {
        entityid: Favourite.entityid,
		comment : Favourite.comment
	}
	Favourite.findOneAndUpdate(query, update, options, callback);
}

// Delete Favourite
module.exports.removeFavourite = function(id, callback){
	let query = {_id: id};
	Favourite.remove(query, callback);
}
