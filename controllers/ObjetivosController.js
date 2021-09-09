const objetivosService = require('../services/objetivosService');

const objetivosController = {

    verObjetivos: async (req, res) => {

        try {
            let objetivosExistente = await objetivosService.VerTodas()
            res.status(200).json(objetivosExistente)    
        } catch (error) {
            res.send(error)
        }
    },

    criarObjetivo: async (req, res) => {
        try {
            let inserido = await objetivosService.CriarObjetivo(req.body)
            res.status(201).json(inserido)
        } catch (error) {
            res.status(error).send(error)
        }
    },
    
    editarObjetivo: async (req,res) => {
        try {
            let editar =  await objetivosService.atualizarObjetivo(req)
            res.status(200).json(editar)
        } catch (error) {
            console.log(error)
        }
    },

    deletarObjetivo: async (req, res) => {
        try {
            let deletar = await objetivosService.Deletarobjetivo(req)
            res.status(200).send(deletar)
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = objetivosController
