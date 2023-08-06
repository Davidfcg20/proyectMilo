const bcrypt = require('bcrypt');


function encrypterMiddleware() {
  return (req, resp, next) => {
    const userPassword = req.body.userPassword;
    bcrypt.hash(userPassword, 5).then((hash) => {
      req.body.userPassword = hash
      next()
    })
  }
}

module.exports = encrypterMiddleware;

