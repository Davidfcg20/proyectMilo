const express = require('express');
const ClientService = require('./../services/client.service');
const validatoMiddleware = require('./../middlewares/validator.handler');
const { createClientSchema } = require('./../schemas/client.schema');

const service = new ClientService();
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    res.send(await service.findAll())
  } catch (error) {
    next(error)
  }
});

module.exports = router;
