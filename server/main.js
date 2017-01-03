var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require('express-session');
var passport = require("passport");


var config = require("./config");
var app = express();

// require('./auth.js')(app, passport);
// var routes = require('./routes');
const PORT = 3050;

// app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
console.log(bodyParser.json);
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client'));




app.use(session({
    secret: "jaga-me-secret",
    resave: false,
    saveUninitialized: true

}));

app.use(passport.initialize());
app.use(passport.session());



// routes.init(app,passport);
// routes.errorHandler(app);

require('./auth.js')(app, passport);
require('./routes.js')(app, passport);




app.listen(PORT, function(){
    console.info("Web Server started on port 3050");
    console.info(__dirname);
});