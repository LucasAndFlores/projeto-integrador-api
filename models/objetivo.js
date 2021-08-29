'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Objetivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Objetivo.init({
    objetivo: DataTypes.STRING,
    alvo: DataTypes.DECIMAL,
    dataAlvo: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'objetivo',
  });
  return Objetivo;
};