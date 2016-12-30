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

var UserModel = require('./api/user/user.model')(database);
var PatientModel = require('./api/patient/patient.model')(database);
var AppointmentModel = require('./api/appointment/appointment.model')(database);
var PaymentModel  = require('./api/payment/payment.model')(database);

database.sync()
.then(function(){
    console.log("DB in sync")
});

module.exports = {
  User: UserModel,
    Patient: PatientModel,
    Appointment : AppointmentModel,
    Payment: PaymentModel

};