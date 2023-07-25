const config = {
  dev: {
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.HOST_ADDRESS,
    dialect: "mysql",
  },
};

module.exports = config;
