const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) => {
    res.render('links/add');
});

router.post('/add', async (req, res) => {
    const { title, link, description } = req.body;
    const newLink = { 
        title, 
        link, 
        description 
    };

    await pool.query('INSERT INTO links SET ?', [newLink]);

    res.send('received');
});

module.exports = router;