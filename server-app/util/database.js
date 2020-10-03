const Sequelize = require('sequelize');

const sequelize = new Sequelize('sys', 'root', 'nodeSQL', {
    dialect: 'mysql', 
    host: 'localhost'
})

module.exports = sequelize;