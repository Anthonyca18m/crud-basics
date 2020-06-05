const express = require('express');
const countryController = require('../controllers/countryController');
const departmentController = require('../controllers/departmentController');
const provinceController = require('../controllers/provinceController');
const districtController = require('../controllers/districtController');

const authController = require('../controllers/authController');
const jwtAuth = require('../middleware/jwtAuth');


const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        "status": 200,
        "message": "Bienvenido al API de [Departamentos, Provincias, Distritos] del Perú"
    });
});

//Country
router.get('/countries', countryController.getAll);
router.get('/countries/:id', countryController.get);
router.post('/countries', jwtAuth, countryController.create);
router.put('/countries/:id', jwtAuth, countryController.edit);
router.delete('/countries/:id', jwtAuth, countryController.delete);

//Department
router.get('/departments', departmentController.getAll);
router.get('/departments/:id', departmentController.get);
router.post('/departments', jwtAuth, departmentController.create);
router.put('/departments/:id', jwtAuth, departmentController.edit);
router.delete('/departments/:id', jwtAuth, departmentController.delete);

//provinces
router.get('/provinces', provinceController.getAll);
router.get('/provinces/:id', provinceController.get);
router.post('/provinces', jwtAuth, provinceController.create);
router.put('/provinces/:id', jwtAuth, provinceController.edit);
router.delete('/provinces/:id', jwtAuth, provinceController.delete);

//districts
router.get('/districts', districtController.getAll);
router.get('/districts/:id', districtController.get);
router.post('/districts', jwtAuth, districtController.create);
router.put('/districts/:id', jwtAuth, districtController.edit);
router.delete('/districts/:id', jwtAuth, districtController.delete);

router.get('/countries/:id/departments', departmentController.getDepartments);
router.get('/departments/:id/provinces', provinceController.getProvinces);
router.get('/provinces/:id/districts', districtController.getDistricts);


router.post('/signin', authController.signin);

module.exports = router;