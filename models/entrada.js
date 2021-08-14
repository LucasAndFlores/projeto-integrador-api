'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entrada extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  };
  Entrada.init({
    nome: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    data: DataTypes.DATE ,
    /* categoryId: DataTypes.INTEGER */
  }, {
    sequelize,
    modelName: 'entrada',
  });
  return Entrada;
};