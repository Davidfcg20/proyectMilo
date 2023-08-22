const { Client } = require('pg')

async function getConnection() {
  try {
    const client = new Client({
      host: 'localhost',
      port: 5432,
      database: 'proyect_milo',
      user: 'Davidfcg20',
      password: '375NegroDF',
    })
    await client.connect();
    return client;

  } catch (error) {
    throw new Error(`Error: ${error}`)
  }

}

module.exports = getConnection;
