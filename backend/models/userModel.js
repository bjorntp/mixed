module.exports = (sequlize, DataTypes) => {
  const User = sequlize.define( "user", {
    userName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {timestamps: true}, )
  return User
}
