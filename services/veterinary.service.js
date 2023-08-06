const UserService = require('./user.service');

class VeterinaryService extends UserService {

  constructor(veterinaryName, veterinaryEmail, veterinaryIdentification, veterinaryPassword, veterinaryTP){
    super(veterinaryName, veterinaryEmail, veterinaryIdentification, veterinaryPassword);
    this.veterinaryTP = veterinaryTP;
  }

}

module.exports = VeterinaryService;
