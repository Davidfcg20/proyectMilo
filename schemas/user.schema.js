const Joi = require('joi');

const userName = Joi.string();
const userEmail = Joi.string();
const userIdentification = Joi.number().integer();
const userPassword = Joi.string();

const createUserSchema = Joi.object({
  userName: userName.required(),
  userEmail: userEmail.required(),
  userIdentification: userIdentification.required(),
  userPassword: userPassword.required(),
})

module.exports = { createUserSchema }
