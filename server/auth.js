var LocalStrategy = require("passport-local").Strategy;
var bcrypt   = require('bcryptjs');
var User = require("./database").User;
var config = require("./config");

//Setup local strategy
module.exports = function (app, passport) {
    function authenticate(username, password, done) {

        console.log("in authenticate; username %s password %s", username, password);
        User.findOne({
            where: {
                username: username
            }
        }).then(function(result) {
            if(!result){
                return done(null, false);
            }else{
                if(bcrypt.compareSync(password , result.password)){
                    return done(null, result);
                }else{
                    return done(null, false);
                }
            }
        }).catch(function(err){
            return done(err, false);
        });


    }

    passport.use(new LocalStrategy({
        usernameField: "username",
        passwordField: "password"
    }, authenticate));

    passport.serializeUser(function (user, done) {
        console.info("serial to session");
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        User.findOne({
            where: {
                email: user.email
            }
        }).then(function(result) {
            if(result){
                console.info("deserial to session");
                done(null, user);
            }
        }).catch(function(err){
            done(err, user);
        });
    });

};