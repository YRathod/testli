module.exports = {
	env :"default",
	postgres: {
	    "server": "localhost",
	    "database": "test",
	    "user": "",
	    "password": "",
	    "port": ""
	},
	mongodb: {
	    "server": "localhost",
	    "database": "wis",
	    "user": "",
	    "password": "",
	    "port": "27017"
	},
	aws :{ 
		"accessKeyId": "YourAccessKey", 
		"secretAccessKey": "YourSecretAccessKey",
		"region": "us-west-1" 
		} 
};