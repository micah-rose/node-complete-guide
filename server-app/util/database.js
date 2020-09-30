const Sequelize = require('sequelize');

const sequelize = new Sequelize('sys', 'root', 'nodeSQL', {
    dialect: 'mysql', 
    host: 'localhost'
})

module.exports = sequelize;

// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'sys',
//     password: 'nodeSQL'
// });

// module.exports = pool.promise();