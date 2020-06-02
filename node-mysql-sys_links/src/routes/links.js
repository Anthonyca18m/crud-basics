const express = require('express');
const router = express.Router();
const {isLogoutIn} = require('../lib/auth');
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/public/assets/img/')
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split('/');
        const extension = ext[1];
      cb(null, file.fieldname + '-' + Date.now() + '.' + extension)
    }
  })

const upload = multer({ 
    storage
 })

const pool = require('../database');

router.get('/add', isLogoutIn, (req, res) => {
    res.render('links/add');
});

router.post('/add', isLogoutIn, upload.single('imagen'),  async (req, res) => {
    const { title, link, description } = req.body;
    
    const ext = req.file.mimetype.split('/');
    const extension = ext[1];
    const imagen = './assets/img/' + req.file.filename
  
    const newLink = { 
        title, 
        link, 
        description,
        img: imagen,
        user_id : req.user.id 
    };

    await pool.query('INSERT INTO links SET ?', [newLink]);
    req.flash('success', 'Link add correctly');
    res.redirect('/links');
});

router.get('/', isLogoutIn,  async (req, res) => {
    const links = await pool.query('SELECT * FROM links WHERE user_id = ?', [req.user.id]);
    res.render('links/list', {links});
});

router.get('/delete/:id', isLogoutIn,  async (req, res) => {
    const {id} = req.params;
    await pool.query('DELETE FROM links WHERE id = ?', [id]);
    req.flash('success', 'Link remove correctly');
    res.redirect('/links');
});

router.get('/edit/:id', isLogoutIn,  async (req, res) => {
    const {id} = req.params;
    const detail = await pool.query('SELECT * FROM links WHERE id = ?', [id]);

    res.render('links/edit', {detail: detail[0]});
});

router.post('/edit/:id', isLogoutIn,  async (req, res) => {
    const {id} = req.params;
    const { title, description, link } = req.body;
    const updateLink = { title, description, link };

    await pool.query('UPDATE links SET ? WHERE id = ?', [updateLink, id]);
    req.flash('success', 'Link updated correctly');
    res.redirect('/links');
});

module.exports = router;