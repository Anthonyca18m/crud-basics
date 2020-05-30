const mysql = require('mysql');
module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        pass: '',
        database: 'node_mysql',
        port: 3306
    });
}