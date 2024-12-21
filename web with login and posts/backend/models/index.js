const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/index')

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  port: config.DB_port,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.ide
  }
});

sequelize.authenticate().then(() => {
  console.log("Connected to database")
}).catch((err) => {
  console.log(err)
})

const db = {}
db.sequelize = sequelize;

db.users = require('./userModel')(sequelize, DataTypes)
db.notes = require('./noteModel')(sequelize, DataTypes)

db.notes.belongsTo(db.users, { foreignKey: 'userId' });
db.users.hasMany(db.notes, { foreignKey: 'userId' });
module.exports = db
