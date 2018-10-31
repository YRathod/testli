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

var Genre =require('./models/genre');
var Book =require('./models/book');
var School= require('./models/school');
var Header= require('./models/header');
var Quote= require('./models/quote');
var User= require('./models/user');
var Question= require('./models/question');


var mongoconnectstring = 'mongodb://'+config.mongodb.server+':'+config.mongodb.port+'/'+config.mongodb.database;
console.log(mongoconnectstring);
mongoose.connect(mongoconnectstring);

var db = mongoose.connection;


var schoolRoute = require('./api/routes/schoolRoute');
app.use('/api', schoolRoute);

var cityRoute = require('./api/routes/cityRoute');
app.use('/api', cityRoute);

var headerRoute = require('./api/routes/headerRoute');
app.use('/api', headerRoute);

var quoteRoute = require('./api/routes/quoteRoute');
app.use('/api', quoteRoute);

var userRoute = require('./api/routes/userRoute');
app.use('/api', userRoute);

var reviewRoute = require('./api/routes/reviewRoute');
app.use('/api', reviewRoute);

var favouriteRoute = require('./api/routes/favouriteRoute');
app.use('/api', favouriteRoute);

var questionRoute = require('./api/routes/questionRoute');
app.use('/api', questionRoute);

//app.use(device.capture());


app.get('/', function(req, res){
	//res.send('API module is up ');
	console.log('redirecting to index.html'); 
	res.redirect('/index.html');    
});

app.listen(4000);
console.log('Running on port 4000...');