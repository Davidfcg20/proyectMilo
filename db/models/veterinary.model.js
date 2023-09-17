const { Sequelize, DataTypes, Model } = require('sequelize');

const VETERINARY_TABLE = 'veterinaries';

const VeterinarySchema = {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    field: 'user_name'
  },
  userEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'user_email'
  },
  userIdentification: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_identification'
  },
  userPassword: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'user_password'
  },
  veterinaryTP: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'veterinary_tp'
  },
};

class Veterinaries extends Model {
  static associations(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: VETERINARY_TABLE,
      modelName: 'veterinary',
      timestamps: false
    }
  }
}

module.exports = {VETERINARY_TABLE, VeterinarySchema, Veterinaries}

