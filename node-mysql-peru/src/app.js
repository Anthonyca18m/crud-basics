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

// if (sequelize.authenticate()) {
//     console.log('connect');
//     Countries.sync();
//     Departments.sync();
//     Provinces.sync();
//     Districts.sync();
//     console.log('All Sync');
// } else {
//     console.log('not connect');
// }


//Inicializaciones
const app = express();

//Configuraciones
app.set('port', process.env.port || 4000);


//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// Access-Control-Allow-Origin: Para controlar quien puede consumir mi API
// Access-Control-Allow-Headers: Para configurar los headers que acepta la API
// Access-Control-Allow-Methods: Para declarar los métodos que acepta el API
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

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