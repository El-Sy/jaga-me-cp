var express = require("express");
var path = require("path");
var UserController = require("./api/user/user.controller");
var PatientController = require("./api/patient/patient.controller");

const CLIENT_FOLDER = path.join(__dirname + '/../client');

module.exports = {
    init:configureRoutes,
    errorHandler: errorHandler
};

function configureRoutes(app){

    /*app.get("/api/user",UserController.show);
    app.get("/api/patient",PatientController.show);*/
    app.use(express.static(__dirname + '/../client'));

}

function errorHandler(app){
    app.use(function(req,res){
        res.status(401).sendFile(CLIENT_FOLDER + "/app/errors/404.html")
    });
    app.use(function (err, req, res, next) {
        res.status(500).sendFile(path.join(CLIENT_FOLDER + '/app/errors/500.html'));
    });
};