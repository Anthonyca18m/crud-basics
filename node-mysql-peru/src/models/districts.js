const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../Config/database');
const Provinces = require('./provinces');

class District extends Model {}

const Districts = District.init({
    id_districts: {
        type: DataTypes.STRING(6),
        primaryKey: true,
        autoIncrement: false,
    },
    d_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    provinces_id: {
        type: DataTypes.STRING(6),
        references: {
            model: Provinces,
            key: 'id_provinces'
        }
    }
},
    {
        // Other model options go here
        timestamps: false,
        sequelize, 
        modelName: 'District'
    });

module.exports = Districts;