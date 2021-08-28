const models = require('../models')
// const config = require('../config/database')
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;


const transacoesController = {

    CadastrarTransacaoSequelize: async (req, res) => {
        try {
            let { loja, dataTransacao, meioPagamento, valor, fkCategoriaId } = req.body;
            const inserir = await models.transacoes.create({
                    loja,
                    dataTransacao,
                    valor,
                    meioPagamento,
                    fkCategoriaId
                })

             res.status(200).json(inserir)
        } catch (error) {
            console.log(error)
        }
    },

    verTransacoes: async (req, res) => {

        try {
            let transacoesexistente = await models.transacoes.findAll({ 
            });
            res.status(200).json(transacoesexistente)  
        } catch (error) {
            console.log(error)
        }
    },

    atualizarTransacao: async (req,res) => {
        try {
            let { id } = req.params
            let { loja, dataTransacao, meioPagamento, valor, fkCategoriaId } = req.body;
            let atualizandoTransacao = await models.transacoes.update(
                {
                    loja,
                    dataTransacao,
                    valor, 
                    meioPagamento,
                    fkCategoriaId
                }, 
                {
                    where: {id: id}
                }
            );
            let mostrandoTransacao = await models.transacoes.findByPk(id)

            res.status(200).json(mostrandoTransacao)
        } catch (error) {
            console.log(error)
        }
    },

    destruirTransacao: async (req, res) => {
        try {
            let { id } = req.params
            let transacaoDestruir = await models.transacoes.destroy(
                {where: {id: id}}
            ) 
            res.status(200).send('transacao destruida')
        } catch (error) {
            console.log(error)
        }
    }








}

module.exports = transacoesController
