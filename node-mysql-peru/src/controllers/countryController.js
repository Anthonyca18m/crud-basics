const sequelize = require('../Config/database');
const Countries = require('../models/countries');

const countryController = {};

countryController.getAll = async (req, res) => {

    const data = await Countries.findAll({
        // where : ,
        // include: [ ---- ]
    })
    .then( (response) => {
        return response;
    })
    .catch( (e) => {
        return e;
    });

    res.json({
        status: 200,
        data
    });
};

countryController.get = async (req, res) => {

    const data = await Countries.findAll({
        where : req.params.id,
        // include: [ ---- ]
    })
    .then( (response) => {
        return response;
    })
    .catch( (e) => {
        return e;
    });

    res.json({
        status: 200,
        data
    });
};

countryController.create = async(req, res) => {
    const { id_countries, c_name } = req.body;
    const data = await Countries.create({
        id_countries,
        c_name
    })
    .then((response) => {
        return response;
    })
    .catch((e) => {
        return e;
    });

    res.json({
        status: 200,
        data
    });
};

countryController.edit = async(req, res) => {
    const { id } = req.params;

    const data = await Countries.update(req.body, {
        where : {id_countries : id }
    })
    .then((response) => {
        return response;
    })
    .catch((e) => {
        return e;
    });

    res.json({
        status: 200,
        data
    });
};

countryController.delete = async(req, res) => {
    const { id } = req.params;

    const data = await Countries.destroy({
        where : {id_countries : id }
    })
    .then((response) => {
        return response;
    })
    .catch((e) => {
        return e;
    });

    res.json({
        status: 200,
        data
    });
};

module.exports = countryController;
