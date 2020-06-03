const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'node_react_mysql',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;