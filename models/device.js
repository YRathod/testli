
var mongoose = require('mongoose');

//Device Schema
var deviceSchema = mongoose.Schema({
	
	name:{
		type: String
	},
	httpversion:{
		type: String
	},
	//---Device type tablet, mobile, desktop-------
	type:{
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

var Device = module.exports = mongoose.model('Device', deviceSchema);

//Get Devices
module.exports.getDevices = function(callback, limit){
	Device.find(callback).limit(limit);
}

//Get Device
module.exports.getDeviceById = function(id, callback){
	Device.findById(id, callback);
}

module.exports.getDevicesByName = function(name , callback, limit){
	Device.find({'name' : new RegExp(name,'i')},callback).limit(limit);
}


//Add Device
module.exports.addDevice = function(device, callback){
	Device.create(device, callback);
}

//Update Device
module.exports.updateDevice = function(id, device, callback){
	var options = {new: true}; 
	var query = {_id: id};
	var update = {
			name: device.name,
			http_version: device.http_version,
			type : device.type
	}
	Device.findOneAndUpdate(query, update, options, callback);
}

//Delete Device
module.exports.removeDevice = function(id, callback){
	var query = {_id: id};
	Device.remove(query, callback);
}
