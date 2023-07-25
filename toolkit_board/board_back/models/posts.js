const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("./index");

class posts extends Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        title: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        content: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: false,
        timestamps: true,
        modelName: "posts",
        tableName: "toolkit_posts",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

module.exports = posts;
