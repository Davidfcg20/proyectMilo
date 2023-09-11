const { Pool } = require('pg');
const { config } = require('../config/config');

const connectionString = `postgressql://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const pool = new Pool({
  connectionString,
})

module.exports = pool;
