const sequelize = require('../Config/database');
const Provinces = require('../models/provinces');
const Departments = require('../models/departments');

const provinceController = {};

provinceController.getAll = async (req, res) => {

    const data = await Provinces.findAll({
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

provinceController.get = async (req, res) => {

    const data = await Provinces.findAll({
        where : {id_provinces : req.params.id},
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

provinceController.create = async(req, res) => {
    const { id_provinces, p_name, department_id } = req.body;
    const data = await Department.create({
        id_provinces,
        p_name,
        department_id
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

provinceController.edit = async(req, res) => {
    const { id } = req.params;

    const data = await Provinces.update(req.body, {
        where : {id_provinces : id }
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

provinceController.delete = async(req, res) => {
    const { id } = req.params;

    const data = await Provinces.destroy({
        where : {id_provinces : id }
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

provinceController.getProvinces = async (req, res) => {

    const data = await Provinces.findAll({
        where : {
            departments_id : req.params.id
        },
        include: [{
            model: Departments,
            as: 'Departments'
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

module.exports = provinceController;
