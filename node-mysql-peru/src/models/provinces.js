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
    departments_id: {
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
    modelName: 'Provinces'
});

Departments.hasMany(Provinces, {as : 'Provinces', foreignKey: 'departments_id'});
Provinces.belongsTo(Departments, {as : 'Departments', foreignKey: 'departments_id'});


module.exports = Provinces;