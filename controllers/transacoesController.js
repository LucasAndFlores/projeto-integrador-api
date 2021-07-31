const models = require('../models')
// const config = require('../config/database')
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;


const transacoesController = {

    CadastrarTransacaoSequelize: async (req, res) => {
        let { loja, data_transacao, meio_pagamento, valor } = req.body;
        const inserir = await models.transacoe.create({
                    loja,
                    data_transacao,
                    valor,
                    meio_pagamento,
                })

                return res.redirect('transacoes')
    },

    verTransacoes: async (req, res) => {
        let transacoesexistente = await models.transacoe.findAll({ 
            limit: 7,
            order: [['data_transacao', 'DESC']]
        });
        let categorias = await models.categoria.findAll({});
        res.render('transacoes', {transacoesexistente, categorias});
    },
}

module.exports = transacoesController
