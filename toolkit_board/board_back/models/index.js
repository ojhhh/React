const Sequelize = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(config.dev);

const db = {};

db.sequelize = sequelize;

module.exports = db;
