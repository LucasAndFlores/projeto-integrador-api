const models = require('../models')
// const config = require('../config/database')
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;


const transacoesController = {

    CadastrarTransacaoSequelize: async (req, res) => {
        try {
            let { loja, data_transacao, meio_pagamento, valor, categorias } = req.body;
            const inserir = await models.transacoe.create({
                    loja,
                    data_transacao,
                    valor,
                    meio_pagamento,
                    fk_categoria_id: categorias
                })

             res.status(200).json(inserir)
        } catch (error) {
            res.status(404) 
            console.log(error)
        }
    },

    verTransacoes: async (req, res) => {

        try {
            let transacoesexistente = await models.transacoe.findAll({ 
            });
            res.status(200).json(transacoesexistente)  
        } catch (error) {
            res.status(404) 
            console.log(error)
        }
    },

    atualizarTransacao: async (req,res) => {
        try {
            let { id } = req.params
            let { loja, data_transacao, meio_pagamento, valor, categorias } = req.body;
            let atualizandoTransacao = await models.transacoe.update(
                {
                    loja,
                    data_transacao,
                    valor, 
                    meio_pagamento,
                    categorias
                }, 
                {
                    where: {id: id}
                }
            );
            let mostrandoTransacao = await models.transacoe.findByPk(id)

            res.status(200).json(mostrandoTransacao)
        } catch (error) {
            res.status(404) 
            console.log(error)
        }
    },

    destruirTransacao: async (req, res) => {
        try {
            let { id } = req.params
            let transacaoDestruir = await models.transacoe.destroy(
                {where: {id: id}}
            ) 
            res.status(200).send('transacao destruida')
        } catch (error) {
            res.status(404) 
            console.log(error)
        }
    }








}

module.exports = transacoesController
