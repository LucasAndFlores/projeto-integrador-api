
const transacoesService = require('../services/transacoesService')

const transacoesController = {

    verTransacoes: async (req, res) => {

        try {
            let transacoesExistente = await transacoesService.VerTodas()
            res.status(200).json(transacoesExistente)  
        } catch (error) {
            res.status(500).send(error)
        }
    },

    criarTransacao: async (req, res) => {
        try {
           let inserido = await transacoesService.CriarTransacao(req.body)
            res.status(201).json(inserido)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    
    editarTransacao: async (req,res) => {
        try {
            
            let editar =  await transacoesService.atualizarTransacao(req)
            res.status(200).json(editar)
        } catch (error) {
            res.status(500).send(error)
        }
    },

    deletarTransacao: async (req, res) => {
        try {
            let deletar = await transacoesService.DeletarTransacao(req)
            res.status(200).send(deletar)
        } catch (error) {
            res.status(500).send(error)
        }
    }

}

module.exports = transacoesController
