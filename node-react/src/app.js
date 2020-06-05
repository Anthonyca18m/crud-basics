const express = require('express');
const app = express();
const x = require('./model/Employee');
const y = require('./model/Role');
const sequelize = require('./model/database');
// importing routes
const employeeRouters = require('./routes/employeeRoute');

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(express.json());

x.sync();
y.sync();
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

//Route
app.use('/employee',employeeRouters);
app.use('/', (req, res) => {
    res.send("Hello World form NodeJS express.");
});

app.listen(app.get('port'), () => {
    console.log("Start server on port " + app.get('port'))
})