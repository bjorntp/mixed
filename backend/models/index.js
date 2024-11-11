const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(process.env.URI, { dialect: 'postgres' })

sequelize.authenticate().then(() => {
  console.log("Database connected to note")
}).catch((err) => {
  console.log(err)
})

const db = {}
db.sequelize = sequelize;

db.users = require('./userModel')(sequelize, DataTypes)
db.notes = require('./noteModel')(sequelize, DataTypes)

module.exports = db
