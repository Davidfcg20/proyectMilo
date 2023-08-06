const express = require('express');
const VeterinaryService = require('./../services/veterinary.service');
const validatoMiddleware = require('./../middlewares/validator.handler');
const { createVeterinarySchema } = require('./../schemas/veterinary.schema');

const encrypterMiddleware = require('./../middlewares/crypt.handler');

const router = express.Router();
const service = new VeterinaryService();

router.get('/', async (req, res, next) => {
  try {
    res.send(await service.findAll())
  } catch (error) {
    next(error)
  }
});

router.get('/prueba',
  validatoMiddleware(createVeterinarySchema, 'body'),
  encrypterMiddleware(),
  async (req, res, next) => {
    try {
      res.json({"Pepe prueba" : req.body})
    } catch (error) {
      next(error)
    }
  }
);

module.exports = router;
