const mysql = require('mysql');
const {promisify} = require('util');
const {database} = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, result) => {
    if (err) {
        switch (err.code) {
            case 'PROTOCOL_CONNECTION_LOST':
                console.log('DATABASE CONNECTION WAS CLOSED');
                break;
            case 'ER_CON_COUNT_ERROR':
                console.log('DATABASE HAS MANY CONNECTIONS');
                break;
            case 'ECONNREFUSED':
                console.log('DATABASE CONNECTION WAS REFUSED');
                break;
        }
    }

    if(result) result.release();
    console.log('DB is Connected');
    return;
});

//para convertir callbacks a promise
pool.query = promisify(pool.query);

module.exports = pool;