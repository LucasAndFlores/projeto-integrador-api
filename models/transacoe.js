'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transacoe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  transacoe.init({
    loja: DataTypes.STRING,
    data_transacao: DataTypes.DATE,
    valor: DataTypes.DECIMAL,
    meio_pagamento: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'transacoe',
  });
  return transacoe;
};