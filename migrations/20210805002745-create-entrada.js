'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('entradas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },      
      valor: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      data: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      /* categoryId: {
        type: Sequelize.INTEGER
      },  */    
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        timestamp: true,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        timestamp: true,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('entradas');
  }
};