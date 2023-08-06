const Joi = require('joi');
const { createUserSchema } = require('./user.schema');

const veterinaryTP = Joi.number().integer();

const createVeterinarySchema = createUserSchema.append({
  veterinaryTP: veterinaryTP.required()
})

module.exports = { createVeterinarySchema }
