const express = require('express');
const VeterinaryService = require('./../services/veterinary.service');
const validatoMiddleware = require('./../middlewares/validator.handler');
const { createVeterinarySchema, getVeterinarySchema, updateVeterinarySchema } = require('./../schemas/veterinary.schema');

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

router.post('/',
  validatoMiddleware(createVeterinarySchema, 'body'),
  encrypterMiddleware(),
  async (req, res, next) => {
    try {
      const data = req.body
      res.send(await service.create(data))
    } catch (error) {
      next(error)
    }
  }
);

router.get('/:userIdentification',
  validatoMiddleware(getVeterinarySchema, 'params'),
  async (req, res, next) => {
    try {
      const { userIdentification } = req.params;
      res.send(await service.findOne(userIdentification))
    } catch (error) {
      next(error)
    }
  }
);

router.patch('/:userIdentification',
  validatoMiddleware(getVeterinarySchema, 'params'),
  validatoMiddleware(updateVeterinarySchema, 'body'),
  async (req, res, next) => {
    try {
      const { userIdentification } = req.params;
      res.send(await service.update(userIdentification, req.body))
    } catch (error) {
      next(error)
    }
  }
);

router.delete('/:userIdentification',
  validatoMiddleware(getVeterinarySchema, 'params'),
  async (req, res, next) => {
    try {
      const { userIdentification } = req.params;
      res.send(await service.delete(userIdentification))
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router;
