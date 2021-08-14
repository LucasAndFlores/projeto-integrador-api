'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('transacoes', 'fk_categoria_id', {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'categoria'
        }
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('transacoes','fk_categoria_id')
  }
};
