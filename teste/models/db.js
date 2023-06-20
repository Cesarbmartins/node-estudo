const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sccp1910@',
    database: 'estudonode'
  });

module.exports = connection;