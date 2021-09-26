'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transacoes extends Model {
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
  transacoes.init({
    loja: DataTypes.STRING,
    dataTransacao: DataTypes.DATE,
    valor: DataTypes.DECIMAL,
    meioPagamento: DataTypes.BOOLEAN,
    fkCategoriaId: {
      type: DataTypes.INTEGER, 
      references: {
        model: 'categoria',
        key: 'id'
      }
    },
    fkUsuarioId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    }
    
  }, {
    sequelize,
    modelName: 'transacoes',
    underscored:true
  });
  return transacoes;
};