const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'proyect_milo',
  user: 'Davidfcg20',
  password: '375NegroDF',
})

module.exports = pool;
