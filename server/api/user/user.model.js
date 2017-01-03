var Sequelize = require("sequelize");

module.exports = function (database) {
    return database.define('user', {
        username: {
            type : Sequelize.STRING,
            allowNull: false
        },
        email: {
            type:Sequelize.STRING,
            allowNull: false
        },
        mobile: {
            type:Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
};