const Joi = require('joi');
const { createUserSchema, getUserSchema, updateUserSchema } = require('./user.schema');

const veterinaryTP = Joi.number().integer();

const createVeterinarySchema = createUserSchema.append({
  veterinaryTP: veterinaryTP.required()
})

const getVeterinarySchema = getUserSchema;

const updateVeterinarySchema = updateUserSchema;

module.exports = { createVeterinarySchema, getVeterinarySchema, updateVeterinarySchema }
