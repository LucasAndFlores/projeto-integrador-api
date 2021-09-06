const categoriaService = require('../services/categoriasService')

const categoriasControoler = {
    
    todasCategoria: async (req,res) =>{
        try {
            let all = await categoriaService.verTodas()
            res.status(200).json(all)
        } catch (error) {
            console.log(error)
        }
    },

    cadastrarCategoria: async (req, res) => {
        try {
            let inserir = await categoriaService.criarCategoria(req)
            res.status(201).json(inserir)
        } catch (error) {
            console.log(error)
        }
    },

    atualizarCategoria: async (req,res) => {
        try {
            let atualizar = await categoriaService.atualizarCategoria(req)
            res.status(200).json(atualizar)
        } catch (error) {
            console.log(error)
        }
    },

    destruirCategoria: async (req, res) => {
        try {
            let deletar = await categoriaService.deletarCategoria(req)
            res.status(200).send(deletar)
        } catch (error) {
            console.log(error)
        }
    }



}

module.exports = categoriasControoler