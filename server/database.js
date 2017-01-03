var Sequelize = require("sequelize");
var config = require('./config');

var database = new Sequelize(
    config.mysql.database,
    config.mysql.username,

    config.mysql.password,{
        host:config.mysql.host,
        dialect:"mysql",
        pool:{
            max:5,
            min:0,
            idle: 10000
        },
        force:false
    }
);

var UserModel = require('./api/user/user.model.js')(database);
// var PatientModel = require('./api/patient/patient.model.js')(database);
// var AppointmentModel = require('./api/appointment/appointment.model.js')(database);
// var PaymentModel  = require('./api/payment/payment.model.js')(database);

database.sync({force: config.seed})
.then(function(){
    console.log("DB in sync");
    require("./seed")();
});

module.exports = {
  User: UserModel
    // Patient: PatientModel,
    // Appointment : AppointmentModel,
    // Payment: PaymentModel

};