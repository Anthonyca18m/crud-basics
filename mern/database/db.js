const sequelize = require('sequelize');
const db = {};

db.sequelize = new sequelize(
    'mern_login',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        // operatorsAliases: false,
        pool : {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });


module.exports = db;