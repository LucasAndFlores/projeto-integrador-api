'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transacoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      loja: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_transacao: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      valor: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      meio_pagamento: {
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
    await queryInterface.dropTable('transacoes');
  }
};