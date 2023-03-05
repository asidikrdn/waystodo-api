"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      categories.belongsTo(models.users, {
        foreignKey: "user_id",
      });
      categories.hasMany(models.todos, {
        foreignKey: "category_id",
      });
    }
  }
  categories.init(
    {
      user_id: DataTypes.INTEGER,
      category_name: DataTypes.STRING,
      bg_color: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "categories",
    }
  );
  return categories;
};