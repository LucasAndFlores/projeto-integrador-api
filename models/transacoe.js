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
      // transacoe.belongsTo(models.categoria, {
      //   foreignKey: 'id',
      //   as: 'fk_categoria_id',
      // })
    }
  };
  transacoe.init({
    loja: DataTypes.STRING,
    data_transacao: DataTypes.DATE,
    valor: DataTypes.DECIMAL,
    meio_pagamento: DataTypes.BOOLEAN,
    fk_categoria_id: {
      type: DataTypes.INTEGER, 
      references: {
        model: 'categoria',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'transacoe',
  });
  return transacoe;
};