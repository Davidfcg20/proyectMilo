const Joi = require('joi');
const { createUserSchema } = require('./user.schema');

const createClientSchema = createUserSchema;

module.exports = { createClientSchema }
