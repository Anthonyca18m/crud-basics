const Sequelize = require('sequelize');
const sequelize = require('./database');

const Role = sequelize.define('role', {
  role: Sequelize.STRING
},
{
	 timestamps: false,
});

module.exports = Role