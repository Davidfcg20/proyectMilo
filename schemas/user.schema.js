const Joi = require('joi');

const userName = Joi.string();
const userEmail = Joi.string();
const userIdentification = Joi.number().integer();
const userPassword = Joi.string();
const userGender = Joi.string();

const createUserSchema = Joi.object({
  userName: userName.required(),
  userEmail: userEmail.required(),
  userIdentification: userIdentification.required(),
  userPassword: userPassword.required(),
  userGender: userGender
});

const getUserSchema = Joi.object({
  userIdentification: userIdentification.required(),
});

const updateUserSchema = Joi.object({
  userEmail: userEmail.required(),
})

module.exports = { createUserSchema, getUserSchema, updateUserSchema}
