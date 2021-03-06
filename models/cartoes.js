'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

    class cartoes extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    cartoes.init({
        name: DataTypes.STRING,
        digitos: DataTypes.INTEGER,
        limite: DataTypes.INTEGER,
        dataDePagamento: {
            type: DataTypes.INTEGER,
            field: 'data_de_pagamento',
        },
        fkUsuarioId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'usuarios',
                key: 'id'
            }
        },

    tipo: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'cartoes',
        underscored: true
    },

    );
    return cartoes;
};