'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Invoice.init({
    paymentDue: DataTypes.INTEGER,
    invoiceDate: DataTypes.INTEGER,
    description: DataTypes.STRING,
    paymentTerms: DataTypes.INTEGER,
    clientName: DataTypes.STRING,
    clientEmail: DataTypes.STRING,
    status: DataTypes.STRING,
    senderAdress: DataTypes.STRING,
    clientAdress: DataTypes.STRING,
    items: DataTypes.STRING,
    total: DataTypes.INTEGER,
    creator: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};
