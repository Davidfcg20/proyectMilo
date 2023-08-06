const express = require('express');
const veterinarysRouter = require('./veterinarys.router');
const clientsRouter = require('./clients.router');

function routerApi(app){

  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/veterinarys', veterinarysRouter);
  router.use('/clients', clientsRouter);

}

module.exports = routerApi;

