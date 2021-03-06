require('dotenv').config();
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_DATABASE,
      user:     process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.STAGING_DATABASE,
      user:     process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.PRODUCTION_DATABASE,
      user:     process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    }
  },

};