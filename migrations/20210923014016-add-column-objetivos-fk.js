'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('objetivos', 'fk_usuario_id', {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'usuarios'
        }
      }
    })
  }, 

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('fk_user_id')
  }
};
