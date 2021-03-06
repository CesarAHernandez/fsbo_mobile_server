"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      token: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Leads, {
      through: models.lead_user,
      foreignKey: "userId"
    });
  };
  return User;
};
