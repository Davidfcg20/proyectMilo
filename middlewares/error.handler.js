/*
function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({ error: err.stack })
}
*/

const { ValidationError } = require("sequelize");

function boomErrorHandler(err, req, res, next){
  if(err.isBoom) {
    console.error(err.stack);
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

function ormErrorHandler(err, req, res, next){
  if(err instanceof ValidationError){
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors,
    });
  } else {
    next(err);
  }
}

module.exports = {/*logErrors, errorHandler,*/ boomErrorHandler, ormErrorHandler};
