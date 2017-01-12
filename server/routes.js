var express = require("express");
var path = require("path");
var UserController = require("./api/user/user.controller");
var PatientController = require("./api/patient/patient.controller");

const CLIENT_FOLDER = path.join(__dirname + '/../client');

module.exports = function(app,passport){

    app.post("/login", passport.authenticate("local",{
    successRedirect:"/#!/home",
    failureRedirect:"/#!/login",
    failureFlash : true

}));

    app.get("/status/user", function(req, res){
        console.log("at status user" + JSON.stringify(req.user));

        var status = "";
        if(req.user){
            status = req.user.username;

        }
        // const output = fs.createWriteStream('./stdout.log');
        // const errorOutput = fs.createWriteStream('./stderr.log');
        // const logger = new Console(output, errorOutput);
        //
        //
        // logger.log(JSON.stringify(req.user));
        console.info("status of the user --> " + status);
        // console.info("status of the user --> " + status);
        // res.send(userID);
        res.send(status).end();
        // res.send(userID);


    });

    // init:configureRoutes,
    // errorHandler: errorHandler
};

function configureRoutes(app, passport){
    console.log("in configureRoutes");

    /*app.get("/api/user",UserController.show);
    app.get("/api/patient",PatientController.show);*/
    app.post("/login", passport.authenticate("local",{
        successRedirect:"/#/home",
        failureRedirect:"/#/",
        failureFlash : true
    }));

}

function errorHandler(app){
    app.use(function(req,res){
        res.status(401).sendFile(CLIENT_FOLDER + "/app/errors/404.html")
    });
    app.use(function (err, req, res, next) {
        res.status(500).sendFile(path.join(CLIENT_FOLDER + '/app/errors/500.html'));
    });
}