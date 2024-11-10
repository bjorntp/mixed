const {Sequelize, DataTypes} = require('sequelize');
const dotenv = require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE_URI, {dialect: 'postgres'})

  sequelize.authenticate().then( () => {
    console.log("Database connected to note")
  }).catch((err) => {
    console.log(err)
  })

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./userModel')(sequelize, DataTypes)

module.exports = db
