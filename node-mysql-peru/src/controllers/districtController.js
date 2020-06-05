const sequelize = require('../Config/database');
const District = require('../models/districts');
const Provinces = require('../models/provinces');
const districtController = {};

districtController.getAll = async (req, res) => {

    const data = await District.findAll({
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

districtController.get = async (req, res) => {

    const data = await District.findAll({
        where : { id_districts : req.params.id},
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

districtController.create = async(req, res) => {
    const { id_districts, d_name, provinces_id } = req.body;
    const data = await District.create({
        id_provinces,
        p_name,
        provinces_id
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

districtController.edit = async(req, res) => {
    const { id } = req.params;

    const data = await District.update(req.body, {
        where : {id_districts : id }
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

districtController.delete = async(req, res) => {
    const { id } = req.params;

    const data = await District.destroy({
        where : {id_districts : id }
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

districtController.getDistricts = async (req, res) => {

    const data = await District.findAll({
        where : {
            provinces_id : req.params.id
        },
        include: [{
            model: Provinces,
            as: 'Provinces'
        }]
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

module.exports = districtController;
