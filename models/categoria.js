'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { 
      categoria.hasMany(models.transacoes, {
        foreignKey: 'fkCategoriaId'
      })
    }
  };
  categoria.init({
    nomeCategoria: {
      type: DataTypes.STRING, 
      field: 'nome_categoria'
    }
  }, {
    sequelize,
    modelName: 'categoria',
    underscored:true
  });
  return categoria;
};