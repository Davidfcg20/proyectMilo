const { VeterinarySchema, Veterinaries } = require('./veterinary.model');

function setupModels(sequelize){
  Veterinaries.init(VeterinarySchema, Veterinaries.config(sequelize))

}

module.exports = setupModels;
