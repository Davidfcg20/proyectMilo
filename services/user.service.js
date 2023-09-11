const boom = require('@hapi/boom');
//const getConnection = require('../libs/postgres');
const pool = require('../libs/postgres.pool');

class UserService {

  constructor(userName, userEmail, userIdentification, userPassword){
    this.userName = userName;
    this.userEmail = userEmail;
    this.userIdentification = userIdentification;
    this.userPassword = userPassword;

    this.pool = pool;
    this.pool.on('error', (err) => {
      console.log(err);
    })

  }

  async create(userName, userEmail, userIdentification, userPassword){}

  async findAll(){
    try {
      const rta = await this.pool.query('SELECT * FROM veterinary')
      return rta.rows;
    } catch (error) {
      throw boom.notFound(`product not found: ${error}`)
    }
    /*try {
      const client = await getConnection();
      const rta = await client.query('SELECT * FROM veterinary');
      return rta.rows;
    } catch (error) {
      throw boom.notFound(`product not found: ${error}`)
    }*/
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
