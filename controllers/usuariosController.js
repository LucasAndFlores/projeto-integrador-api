
const usuariosService = require('../services/usuariosService');


const usuariosController = {

    verUsuarios: async (req, res) => {
        try {
            await usuariosService.verUsuarios(req, res);
        } catch (error) {
            return res.status(500).send({
                date: new Date(),
                code: 500,
                message: error
            });
        }
    },

    verUsuario: async (req, res) => {
        try {
            await usuariosService.verUsuario(req, res);
        } catch (error) {
            return res.status(500).send({
                date: new Date(),
                code: 500,
                message: error
            });
        }
    },

    cadastrarUsuario: async (req, res) => {

        try {
            await usuariosService.cadastrarUsuario(req, res);
        } catch (error) {
            return res.status(500).send({
                date: new Date(),
                code: 500,
                message: error
            });
        }
    },

    editarUsuario: async (req, res) => {
        try {
            await usuariosService.editarUsuario(req, res);
        } catch (error) {
            return res.status(500).send({
                date: new Date(),
                code: 500,
                message: error
            });
        }

    },

    deletarUsuario: async (req, res) => {
        try {
            await usuariosService.deletarUsuario(req, res);
        } catch (error) {
            return res.status(500).send({
                date: new Date(),
                code: 500,
                message: error
            });
        }
    },

    autorizarUsuario: async (req, res) => {
        try {
            await usuariosService.autorizarUsuario(req, res);
        } catch (error) {
            return res.status(500).send({
                date: new Date(),
                code: 500,
                message: error
            });
        }

    }

}

module.exports = usuariosController;