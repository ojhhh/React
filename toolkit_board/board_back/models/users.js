const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../models");

class users extends Model {
  static init(sequelize) {
    return super.init({
      user_id: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      user_pw: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    });
  }
}
