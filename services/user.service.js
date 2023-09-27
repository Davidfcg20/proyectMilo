const boom = require('@hapi/boom');
//const getConnection = require('../libs/postgres');
const pool = require('../libs/postgres.pool');
//const sequelize = require('../libs/sequelize');
const { models } = require('../libs/sequelize');

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

  async create(data){
    try {
      const newUser = await models.Veterinary.create(data);
      return newUser;
    } catch (error) {
      throw boom.notFound(`error creating: ${error}`)
    }
  }

  async findAll(){
    try {
      const rta = await models.Veterinary.findAll();
      return rta
    } catch (error) {
      throw boom.notFound(`error finding all: ${error}`)
    }
    // try {
    //   const [rta] = await sequelize.query('SELECT * FROM veterinary')
    //   return rta
    // } catch (error) {
    //   throw boom.notFound(`product not found: ${error}`)
    // }
    // try {
    //   const rta = await this.pool.query('SELECT * FROM veterinary')
    //   return rta.rows;
    // } catch (error) {
    //   throw boom.notFound(`product not found: ${error}`)
    // }
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
      const user = await models.Veterinary.findByPk(userIdentification);
      if (!user) {
        throw boom.notFound('user not found')
      }
      return user;
    } catch (error) {
      throw boom.notFound(`error finding: ${error}`)
    }
  }

  async update(userIdentification, changes){
    try {
      const user = await this.findOne(userIdentification);
      const rta = await user.update(changes)
      return rta
    } catch (error) {
      throw boom.notFound(`error updating: ${error}`)
    }
  }

  async delete(userIdentification){
    try {
      const user = await this.findOne(userIdentification);
      await user.destroy()
      return userIdentification
    } catch (error) {
      throw boom.notFound(`error deleting: ${error}`)
    }
  }

}

module.exports = UserService;
