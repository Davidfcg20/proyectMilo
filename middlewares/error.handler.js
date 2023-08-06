/*
function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({ error: err.stack })
}
*/

function boomErrorHandler(err, req, res, next){
  if(err.isBoom) {
    console.error(err.stack);
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}


module.exports = {/*logErrors, errorHandler,*/ boomErrorHandler};
