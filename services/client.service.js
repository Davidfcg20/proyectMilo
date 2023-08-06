const UserService = require('./user.service');

class ClientService extends UserService {

  constructor(clientName, clientEmail, clientIdentification, clientPassword){
    super(clientName, clientEmail, clientIdentification, clientPassword);
  }

}

module.exports = ClientService;
