var mongoose = require('mongoose');
//schoolModel Schema
var schoolSchema = mongoose.Schema({
	
	name:{
		type: String,
		required: true
	},
	details:{
		type: String
	},
	address:{
		type: String
	},
	city:{
		type: String,
		required: true
	},
	zipcode:{
		type: String,
		required: true
	},
	state:{
		type: String
	},
	country:{
		type: String
	},
	boys:{
		type: Number
	},
	girls:{
		type: Number
	},
	maleteacher:{
		type: Number //--Number of teacher
	},
	femaleteacher:{
		type: Number //--Number of teacher
	},
	type :{
		type: String //--Public / Private/ International
	},
	daycare :{
		type: Boolean
	}, 
	prekg :{
		type: Boolean
	},
	kg :{
		type: Boolean
	},
	primary :{
		type: Boolean
	},
	
	secondary :{
		type: Boolean
	},
	
	high :{
		type: Boolean
	},
	website:{
		type: String
	},
	starttime:{
		type: Number
	},
	endtime:{
		type: Number
	},
	email:{
		type: [String]
	},
	phone:{
		type: [String]
	},
	fax:{
		type: [String]
	},
	schoolimages:{
		type: [String]
	},
	deviceid :{
		type: String
	},
	like :{
		type: String
	},
	favourite : {
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


var School = module.exports = mongoose.model('School', schoolSchema);

// Get Schools
module.exports.getSchools = function(callback, limit){
	School.find(callback).limit(limit);
}

// Get School
module.exports.getSchoolById = function(id, callback){
	School.findById(id, callback);
}

module.exports.getSchoolsByName = function(name , callback, limit){
	School.find({'name' : new RegExp(name,'i')},callback).limit(limit);
}

module.exports.getSchoolsByZipcode = function(zipcode , callback, limit){
	School.find({'zipcode' : zipcode },callback).limit(limit);
}


module.exports.getSchoolsByCity = function(city , callback, limit){
	School.find({'city' : city },callback).limit(limit);
}


// Add School
module.exports.addSchool = function(school, callback){
	School.create(school, callback);
}

// Update School
module.exports.updateSchool = function(id, school, callback){
	var options = {new: true}; 
	var query = {_id: id};
	var update = {
			name: school.name,
			details : school.details,
			address: school.address,
			city : school.city,
			state: school.state,
			country: school.country,
			students: school.students,
			teachers: school.teachers,
			website: school.website,
			email: school.email,
			phone: school.phone,
			maleteacher : school.maleteacher,
		    femaleteacher : school.femaleteacher,
		    boys : school.boys,
		    girls : school.girls,
		    fax : school.fax,
		    modifieddate : Date.now,
		    daycare : school.daycare,
		    prekg:school.prekg,
		    kg : school.kg,
		    primary : school.primary,
		    secondary : school.secondary,
		    high : school.high,
		    type : school.type
	}
	School.findOneAndUpdate(query, update, options, callback);
}

// Delete School
module.exports.removeSchool = function(id, callback){
	var query = {_id: id};
	School.remove(query, callback);
}