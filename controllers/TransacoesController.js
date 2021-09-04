
const transacoesService = require('../services/transacoesService')

const transacoesController = {

    verTransacoes: async (req, res) => {

        try {
            let transacoesExistente = await transacoesService.VerTodas()
            res.status(200).json(transacoesExistente)  
        } catch (error) {
            res.send(error)
        }
    },

    criarTransacao: async (req, res) => {
        try {
           let inserido = await transacoesService.CriarTransacao(req.body)
            res.status(201).json(inserido)
        } catch (error) {
            res.status(error).send(error)
        }
    },
    
    editarTransacao: async (req,res) => {
        try {
            let editar =  await transacoesService.atualizarTransacao(req)
            res.status(200).json(editar)
        } catch (error) {
            console.log(error)
        }
    },

    deletarTransacao: async (req, res) => {
        try {
            let deletar = await transacoesService.DeletarTransacao(req)
            res.status(200).send(deletar)
        } catch (error) {
            console.log(error)
        }
    }


}

module.exports = transacoesController
