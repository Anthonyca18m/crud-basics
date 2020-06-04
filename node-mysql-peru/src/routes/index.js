const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        "status": 200,
        "message": "Bienvenido al API de [Departamentos, Provincias, Distritos] del Perú"
    });
});

module.exports = router;