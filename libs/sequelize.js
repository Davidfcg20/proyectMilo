const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('../db/models/index');

const connectionString = `mysql://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`
//const connectionString = `postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(connectionString);

setupModels(sequelize);
sequelize.sync();

module.exports = sequelize;
