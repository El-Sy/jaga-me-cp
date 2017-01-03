var bcrypt   = require('bcryptjs');
var config = require("./config");
var database = require("./database");
var User = database.User;


module.exports = function () {
    if (config.seed) {
        var hashpassword = bcrypt.hashSync("123", bcrypt.genSaltSync(8), null);
        User
            .create({
                username: "admin",
                email: "admin@gmail.com",
                mobile: "98832587",
                password: hashpassword,


            })
            .then(function (user) {

            })
            .catch(function (err) {
                console.log("Error", arguments)
            });


    }
};