const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../Config/database');

class Country extends Model { }

const Countries = Country.init({
    id_countries: {
        type: DataTypes.STRING(6),
        primaryKey: true,
        autoIncrement: false,
    },
    c_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        // Other model options go here
        timestamps: false,
        sequelize, 
        modelName: 'Country'
    });

module.exports = Countries;