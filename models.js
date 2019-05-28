const Sequelize = require('sequelize')
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite',
    logging: false // console.log()함수와 바인딩 되어있음
})
const User = sequelize.define('User', {
    name: Sequelize.STRING // varchar 255
})

module.exports = {Sequelize, sequelize, User}

