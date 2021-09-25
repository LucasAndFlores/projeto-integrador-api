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

    up: async (queryInterface, Sequelize) => {
        queryInterface.addColumn('cartoes', 'fk_usuario_id', {
            type: Sequelize.INTEGER,
            references: {
                model: {
                    tableName: 'usuarios'
                }
            }
        })
    },

    down: async (queryInterface, Sequelize) => {
        queryInterface.removeColumn('transacoes', 'fk_categoria_id')
    }
};
