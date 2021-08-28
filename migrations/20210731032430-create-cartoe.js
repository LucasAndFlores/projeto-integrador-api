'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cartoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      digitos: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      limite: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data_de_pagamento: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
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
    await queryInterface.dropTable('cartoes');
  }
};