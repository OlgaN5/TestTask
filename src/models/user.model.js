const Sequelize = require('sequelize')
const db = require('../config/database')
module.exports = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
    },
    photo: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
    }
})