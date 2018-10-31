var mongoose = require('mongoose');
//cityModel Schema
var citySchema = mongoose.Schema({
	
	name:{
		type: String,
		required: true
	},
	taluka:{
		type: String,
	},
	district:{
		type: String,
	},
	zipcode:{
		type: String
	},
	state:{
		type: String
	},
	country:{
		type: String,
		required: true
	},
	createdate:{
		type: Date,
		default: Date.now
	},
	createby:{
		type: String,
		default: "Client"
	},
	deviceid :{
		type: String
	},
	// 0- inactive , 1 - active , more status on the way
    status : 
    {
        type: String
    }
});


var City = module.exports = mongoose.model('City', citySchema);

// Get City
module.exports.getCitys = function(callback, limit){
	console.log("GetCity Method");
	City.find(callback).limit(limit);
}

module.exports.getAllCity = function(callback, limit){
	console.log("getAllCity Method");
	City.find(callback).limit(limit);
}
//Get Citys TODO ---develop tyhis API
module.exports.getCityByCountry = function(country,callback, limit){
	City.find({'country' : new RegExp(country,'i')},callback).limit(limit);
}

//Get Citys TODO ---develop tyhis API
module.exports.getCityByZipcode = function(zipcode,callback, limit){
	City.find({'zipcode' : new RegExp(zipcode,'i')},callback).limit(limit);
}
// Get City
module.exports.getCityById = function(id, callback){
	City.findById(id, callback);
}

module.exports.getCitysByName = function(name , callback, limit){
	City.find({'name' : new RegExp(name,'i')},callback).limit(limit);
}

module.exports.getCitysByZipcode = function(zipcode , callback, limit){
	City.find({'zipcode' : zipcode },callback).limit(limit);
}



// Add City
module.exports.addCity = function(city, callback){
	City.create(city, callback);
}

// Update City
module.exports.updateCity = function(id, city, options, callback){
	var query = {_id: id};
	var update = {
			name: city.name,
			zipcode:city.zipcode,
			state: city.state,
			country: city.country
	}
	City.findOneAndUpdate(query, update, options, callback);
}

// Delete City
module.exports.removeCity = function(id, callback){
	var query = {_id: id};
	City.remove(query, callback);
}