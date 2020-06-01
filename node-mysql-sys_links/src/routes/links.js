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
    req.flash('success', 'Link add correctly');
    res.redirect('/links');
});

router.get('/', async (req, res) => {
    const links = await pool.query('SELECT * FROM links');
    res.render('links/list', {links});
});

router.get('/delete/:id', async (req, res) => {
    const {id} = req.params;
    await pool.query('DELETE FROM links WHERE id = ?', [id]);
    req.flash('success', 'Link remove correctly');
    res.redirect('/links');
});

router.get('/edit/:id', async (req, res) => {
    const {id} = req.params;
    const detail = await pool.query('SELECT * FROM links WHERE id = ?', [id]);

    res.render('links/edit', {detail: detail[0]});
});

router.post('/edit/:id', async (req, res) => {
    const {id} = req.params;
    const { title, description, link } = req.body;
    const updateLink = { title, description, link };

    await pool.query('UPDATE links SET ? WHERE id = ?', [updateLink, id]);
    req.flash('success', 'Link updated correctly');
    res.redirect('/links');
});

module.exports = router;