const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const sessionMysql = require('express-mysql-session');
const passport = require('passport');

const sequelize = require('./Config/database');
const Countries = require('./models/countries');
const Departments = require('./models/departments');
const Provinces = require('./models/provinces');
const Districts = require('./models/districts');

if (sequelize.authenticate()) {
    console.log('connect');
    Countries.sync();
    Departments.sync();
    Provinces.sync();
    Districts.sync();
} else {
    console.log('not connect');
}


//Inicializaciones
const app = express();

//Configuraciones
app.set('port', process.env.port || 4000);


//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());



//Global Variables
app.use((req, res, next) => {
    //variables locals
    next();
});

//Routes
app.use(require('./routes'));


//Public 
// app.use(express.static(path.join(__dirname, 'public')));


//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});