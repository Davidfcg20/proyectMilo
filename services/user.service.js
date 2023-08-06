const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

class UserService {

  constructor(userName, userEmail, userIdentification, userPassword){
    this.userName = userName;
    this.userEmail = userEmail;
    this.userIdentification = userIdentification;
    this.userPassword = userPassword;
  }

  async create(userName, userEmail, userIdentification, userPassword){}

  async findAll(){
    try {
      return ('HELLO FIND ALL')
    } catch (error) {
      throw boom.notFound(`product not found: ${error}`)
    }
  }

  async findOne(userIdentification){
    try {
      return ('HELLO FIND ONE')
    } catch (error) {
      throw boom.notFound(`product not found: ${error}`)
    }
  }

  async update(userName, userEmail, userIdentification, userPassword){
    try {
      return ('HOLA UPDATE')
    } catch (error) {
      throw boom.notFound(`product not found: ${error}`)
    }
  }

  async delete(userIdentification){
    try {
      return ('HOLA DELETE')
    } catch (error) {
      throw boom.notFound(`product not found: ${error}`)
    }
  }

}

module.exports = UserService;
