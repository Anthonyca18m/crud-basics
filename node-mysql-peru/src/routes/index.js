const express = require('express');
const countryController = require('../controllers/countryController');


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
router.post('/countries', countryController.create);
router.put('/countries/:id', countryController.edit);
router.delete('/countries/:id', countryController.delete);

module.exports = router;