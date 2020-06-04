const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../Config/database');
const Departments = require('./departments');

class Province extends Model { }

const Provinces = Province.init({
    id_provinces : {
        type: DataTypes.STRING(6),
        primaryKey: true,
        autoIncrement: false,
    },
    p_name: { 
        type:DataTypes.STRING,
        allowNull: false
    },
    deparments_id: {
        type: DataTypes.STRING(6),
        // This is a reference to another model
        references: {
          model: Departments,
          key: 'id_departments'
        }
      }
},
{
    timestamps: false,
    sequelize, 
    modelName: 'Province'
});

module.exports = Provinces;