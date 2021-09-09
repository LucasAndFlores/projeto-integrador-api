/* const models = require('../models');
const { Op } = require('sequelize'); */

const entradasService = require('../services/entradasService');

const entradasController = {

    verEntradas: async (req, res) => {
        try {
            let entradasExistentes = await models.entrada.findAll({});
            res.status(200).json(entradasExistentes)
        } catch (error) {
            res.send(error)
        }    
    },

    criarEntrada: async (req, res) => {
        try {
            let inserido = await entradasService.CriarEntrada(req.body)
            res.status(201).json(inserido)
        } catch (error) {
            res.status(error).send(error)
        }
    },

    editarEntrada: async (req,res) => {
        try {
            let editar =  await entradasService.atualizarEntrada(req)
            res.status(200).json(editar)
        } catch (error) {
            console.log(error)
        }
    },

    deletarEntrada: async (req, res) => {
        try {
            let deletar = await entradasService.DeletarEntrada(req)
            res.status(200).send(deletar)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = entradasController