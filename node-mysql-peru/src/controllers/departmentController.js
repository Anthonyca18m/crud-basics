const sequelize = require('../Config/database');
const Department = require('../models/departments');
const Countries = require('../models/countries');

const departmentController = {};

departmentController.getAll = async (req, res) => {

    const data = await Department.findAll({
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

departmentController.get = async (req, res) => {

    const data = await Department.findAll({
        where : { id_departments: req.params.id},
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

departmentController.create = async(req, res) => {
    const { id_departments, d_name, countries_id } = req.body;
    const data = await Department.create({
        id_departments,
        d_name,
        countries_id
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

departmentController.edit = async(req, res) => {
    const { id } = req.params;

    const data = await Department.update(req.body, {
        where : {id_departments : id }
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

departmentController.delete = async(req, res) => {
    const { id } = req.params;

    const data = await Department.destroy({
        where : {id_departments : id }
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

departmentController.getDepartments = async (req, res) => {

    const data = await Department.findAll({
        where : {
            countries_id : req.params.id
        },
        include: [{
            model: Countries,
            as: 'Countries'
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

module.exports = departmentController;
