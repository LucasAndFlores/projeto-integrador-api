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
    
    editarTransacao: async (req,res) => {
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

    deletarTransacao: async (req, res) => {
        try {
            let { id } = req.params
            let transacaoDestruir = await models.transacoes.destroy(
                {where: {id: id}}
            ) 
            res.status(200).send('Transação deletada com sucesso!')
        } catch (error) {
            console.log(error)
        }
    }








}

module.exports = transacoesController
