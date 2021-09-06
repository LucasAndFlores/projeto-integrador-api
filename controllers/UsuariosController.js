
const usuariosService = require('../services/usuariosService');


const usuariosController = {

    verUsuarios: async (req, res) => {
        try {
            let usuario = await models.usuarios.findAll({
            })
            res.status(200).json(usuario);
        } catch (error) {
            res.status(404)
            console.log(error)
        }
    },

    cadastrarUsuario: async (req, res) => {

        try {
            await usuariosService.cadastrarUsuario(req, res);
        } catch (e) {
            return res.status(500).send({
                date: new Date(),
                code: 500,
                message: e.message
            });
        }
    },

    editarUsuario: async (req, res) => {
        try {
            const { id } = req.params
            const { nome, sobrenome, telefone } = req.body;
            await models.usuarios.update({
                nome,
                sobrenome,
                telefone
            },
                {
                    where: {
                        id
                    }
                });
            let mostrandoUsuario = await models.usuarios.findByPk(id)

            res.status(200).json(mostrandoUsuario)

        } catch (error) {
            res.status(404)
            console.log(error)
        }

    },

    deletarUsuario: async (req, res) => {
        try {
            let { id } = req.params
            await models.usuarios.destroy(
                { where: { id: id } }
            )
            res.status(200).send('Usuario deletado com sucesso!')

        } catch (error) {
            res.status(404)
            console.log(error)
        }
    },

    autorizarUsuario: async (req, res) => {
        try {
            await usuariosService.autorizarUsuario(req, res);
        } catch (e) {
            return res.status(400).send({
                date: new Date(),
                code: 400,
                message: e.message
            });
        }

    }

}

module.exports = usuariosController;