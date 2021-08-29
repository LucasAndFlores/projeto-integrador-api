const models = require('../models')

const transacoesController = {

    verTransacoes: async (req, res) => {

        try {
            let transacoesExistente = await models.transacoe.findAll({ 
            });
            res.status(200).json(transacoesExistente)  
        } catch (error) {
            res.status(404) 
            console.log(error)
        }
    },

    criarTransacao: async (req, res) => {
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
    
    editarTransacao: async (req,res) => {
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

    deletarTransacao: async (req, res) => {
        try {
            let { id } = req.params
            let transacaoDestruir = await models.transacoe.destroy(
                {where: {id: id}}
            ) 
            res.status(200).send('Transação deletada com sucesso!')
        } catch (error) {
            res.status(404) 
            console.log(error)
        }
    }








}

module.exports = transacoesController
