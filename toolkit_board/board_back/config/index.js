const config = {
  dev: {
    database: process.env.DATABASE_NAME,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST_ADDRESS,
    dialect: mysql,
  },
};

module.exports = config;
