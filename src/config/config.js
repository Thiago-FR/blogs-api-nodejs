require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOSTNAME,
    port: process.env.DB_PORT,
    dialect: process.env.DIALECT,
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOSTNAME,
    port: process.env.DB_PORT,
    dialect: process.env.DIALECT,
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOSTNAME,
    port: process.env.DB_PORT,
    dialect: process.env.DIALECT,
  },
};
