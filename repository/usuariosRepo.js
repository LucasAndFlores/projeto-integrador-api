const models = require('../models')

const usuariosRepo = {

    BuscarTodas: async () => {
        try {
            const todosUsuarios = await models.usuarios.findAll({})
            return todosUsuarios
        } catch (error) {
            return error
        }
    },

    Criar: async data => {
        try {
            const criado = await models.usuarios.create(data);
            return criado;
        } catch (error) {

            return error.original.sqlMessage
        }
    },

    Atualizar: async (data, id) => {
     
        try {
            const atualizado = await models.usuarios.update(data, id)
            return atualizado
        } catch (error) {
            return error
        }
    },

    Pesquisar: async (id) => {
        try {
            const localizado = await models.usuarios.findByPk(id)
            return localizado
        } catch (error) {
            return error
        }
    },

    PesquisarEmail: async (email) => {
        try {
            let localizado = await models.usuarios.findOne({
                where: {
                    email: email
                }
            });
            return localizado
        } catch (error) {
            return error
        }
    },

    Deletar: async (where) => {
        try {
            const deletado = await models.usuarios.destroy(where)
            return deletado
        } catch (error) {
            return error
        }
    }

}

module.exports = usuariosRepo;