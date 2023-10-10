const { config } = require('../config/config');

const connectionString = `postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    url: connectionString,
    dialect: 'postgres',
  },

  production: {
    url: connectionString,
    dialect: 'postgres',
  }

}
