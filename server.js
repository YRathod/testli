var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var config = require('config');
var cors = require('cors')
//var device = require('express-device');
var app = express();

app.set('superSecret', config.secret);
console
.log('Secret --> '+app.get('superSecret'));

app.use(express.static(__dirname+'/views'));
app.use(bodyParser.json());
app.use(cors())

var mongoconnectstring = 'mongodb://'+config.mongodb.server+':'+config.mongodb.port+'/'+config.mongodb.database;
console.log(mongoconnectstring);
mongoose.connect(mongoconnectstring);

var db = mongoose.connection;
require('./api/routes/question.bank.routes')(app);

// var questionRoute = require('./api/routes/question.routes');
// app.use('/api', questionRoute);

//app.use(device.capture());


app.get('/', function(req, res){
	//res.send('API module is up ');
	console.log('redirecting to index.html'); 
	res.redirect('/index.html');    
});

app.listen(4000);
console.log('Running on port 4000...');