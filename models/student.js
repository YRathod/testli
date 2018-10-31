var mongoose = require('mongoose');


var auditModel=require('./audit.model');

//Student Schema
var studentSchema = mongoose.Schema({
  studentid:{
		type: String,
		required: true
    },
	firstname:{
		type: String,
		required: true
    },
  middlename:{
		type: String,
		required: true
    },
  lastname:{
		type: String,
		required: true
	},
	grade :{
		type: String,
		required: true
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
	active:{
		type: Boolean
	},

	audit:{
		type:auditModel,default:auditModel
	},
	status : {
		type: String
	}
	
});

var Student = module.exports = mongoose.model('Student', studentSchema);

// Get Students
//Get Books
module.exports.getStudents = function(callback, limit){
	Student.find(callback).limit(limit);
}


// Get Student
module.exports.getStudentByStudentName = function(studentname, callback){
	Student.find({"studentname" : studentname}, callback);
}

//Get Student
module.exports.getStudentById = function(id, callback){
	Student.findById(id, callback);
}
// Add Student
module.exports.addStudent = function(student, callback){
	console.log('Create Student' + student);
	Student.create(student, callback);
}

// Update Student
module.exports.updateStudent = function(id, student, callback){
	var options = {new: true}; 
	var query = {_id: id};
	var update = {
			firstname: student.firstname,
			lastname: student.lastname,
			studentname: student.studentname,
			grade: student.grade,
			address: student.address,
			city : student.city,
			state: student.state,
			country: student.country,
			email: student.email,
			phone: student.phone,
			
	}
	
	console.log("New Object : " + JSON.stringify(update));
	
	
	Student.findOneAndUpdate(query, update, options, callback);
}

// Delete Student
module.exports.removeStudent = function(id, callback){
	var query = {_id: id};
	Student.remove(query, callback);
}