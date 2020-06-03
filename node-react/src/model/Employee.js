//import sequelize
const Sequelize = require('sequelize');
// importing connection database
const sequelize = require('./database');
// import model for FK roleID
const Role = require('./Role');

const Employee = sequelize.define('employee', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.STRING,
  roleId: {
    type: Sequelize.INTEGER,
    // This is a reference to another model
    references: {
      model: Role,
      key: 'id'
    }
  }
},
{
	 timestamps: false,
});

Employee.belongsTo(Role)

module.exports = Employee