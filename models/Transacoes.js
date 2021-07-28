module.exports = (sequelize, DataTypes) => {
        const Transacoes = sequelize.define('Transacoes', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true, 
            primaryKey: true,
        }, 
        loja: {
            type: DataTypes.STRING,
            allowNull: false,
        },  
        data_da_transacao: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        valor_da_transacao: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        meio_de_pagamento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },{
        tableName: 'transacoes',
        timestamps: false
    })

        return Transacoes
}