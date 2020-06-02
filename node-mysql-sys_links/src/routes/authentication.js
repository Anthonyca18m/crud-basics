const express = require('express');
const router = express.Router();
const passport = require('passport');
const {isLogoutIn, isNotLogoutIn} = require('../lib/auth');

router.get('/signup', isNotLogoutIn, (req, res) => {

    res.render('auth/signup');
});

router.post('/signup', isNotLogoutIn, passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureflash: true
}));

router.get('/signin', (req, res) => {

    res.render('auth/signin');
});

router.post('/signin', isNotLogoutIn, (req, res, next) => {

    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureflash: true
    })(req, res, next);
});

router.get('/profile', isLogoutIn,  (req, res) => {

    res.render('profile');
});

router.get('/logout', (req, res) => {
    req.logOut();
    res.render('auth/signin');
});


module.exports = router;