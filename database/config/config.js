const dotenv = require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres'
  },
  test: {
    username: process.env.USERNAME,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres'
  },
  production: {
    use_env_variable: process.env.DATABASE_URL,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    host: process.env.HOST,
    port: 5432,
    dialect: 'postgres'
  }
};
