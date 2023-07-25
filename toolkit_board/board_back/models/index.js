const Sequelize = require("sequelize");
const config = require("../config");
const users = require("./users");
const posts = require("./posts");

const sequelize = new Sequelize(config.dev);

users.init(sequelize);
posts.init(sequelize);
const db = {};
db.sequelize = sequelize;
db.users = users;
db.posts = posts;

module.exports = db;
