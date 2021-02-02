const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "blog",
    password: ""
});

module.exports = connection;