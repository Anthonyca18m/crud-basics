const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../Config/database');
const Countries = require('./countries');

class Department extends Model { }

const Departments = Department.init({
    id_departments : {
        type: DataTypes.STRING(6),
        primaryKey: true,
        autoIncrement: false,
    },
    d_name: { 
        type:DataTypes.STRING,
        allowNull: false
    },
    countries_id: {
        type: DataTypes.STRING(6),
        // This is a reference to another model
        references: {
          model: Countries,
          key: 'id_countries'
        }
      }
},
{
    timestamps: false,
    sequelize, 
    modelName: 'Departments'
});

Countries.hasMany(Departments, {as : 'Departments', foreignKey : 'countries_id'});
Departments.belongsTo(Countries, {as : 'Countries', foreignKey : 'countries_id'});

module.exports = Departments;