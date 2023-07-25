const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("./index");

class users extends Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        user_pw: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: false,
        timestamps: true,
        modelName: "users",
        tableName: "toolkit_users",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

module.exports = users;
