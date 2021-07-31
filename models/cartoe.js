'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cartoe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cartoe.init({
    name: DataTypes.STRING,
    digitos: DataTypes.INTEGER,
    limite: DataTypes.INTEGER,
    data_de_pagamento: DataTypes.INTEGER,
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cartoe',
  });
  return cartoe;
};