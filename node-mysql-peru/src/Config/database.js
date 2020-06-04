const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
  'node_mysql_peru',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;