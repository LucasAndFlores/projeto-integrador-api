
const cartoesService = require('../services/cartoesService');

//
const cartoesController = {

    verCartoes: async (req, res) => {
        try {
            await cartoesService.verCartoes(req, res);
        } catch (error) {
            return res.status(500).send({
                date: new Date(),
                code: 500,
                message: error
            });
        }
    },

    verCartoesUsuario: async (req, res) => {
        try {
            await cartoesService.verCartoesUsuario(req, res);
        } catch (error) {
            return res.status(500).send({
                date: new Date(),
                code: 500,
                message: error
            });
        }
    },



    verCartao: async (req, res) => {
        try {
            await cartoesService.verCartao(req, res);
        } catch (error) {
            return res.status(500).send({
                date: new Date(),
                code: 500,
                message: error
            });
        }
    },

    criarCartao: async (req, res) => {
    
        try {
            await cartoesService.criarCartao(req, res);
        } catch (error) {
            return res.status(500).send({
                date: new Date(),
                code: 500,
                message: error
            });
        }
    },

    editarCartao: async (req, res) => {
        try {
            await cartoesService.editarCartao(req, res);
        } catch (error) {
            return res.status(500).send({
                date: new Date(),
                code: 500,
                message: error
            });
        }

    },

    deletarCartao: async (req, res) => {
        try {
            await cartoesService.deletarCartao(req, res);
        } catch (error) {
            return res.status(500).send({
                date: new Date(),
                code: 500,
                message: error
            });
        }
    },


}

module.exports = cartoesController;