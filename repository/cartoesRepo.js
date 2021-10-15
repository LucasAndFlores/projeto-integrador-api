const models = require('../models')

const usuariosRepo = {

    BuscarTodas: async () => {
        try {
            const todosCartoes = await models.cartoes.findAll({})
            return todosCartoes
        } catch (error) {
            return error
        }
    },

    BuscarTodas: async (where) => {
        try {
            const todosCartoes = await models.cartoes.findAll(where)
            return todosCartoes
        } catch (error) {
            return error
        }
    },

    

    Criar: async data => {

        try {
            const criado = await models.cartoes.create(data);
            return criado;
        } catch (error) {

            return error
        }
    },

    Atualizar: async (data, id) => {
     
        try {
            const atualizado = await models.cartoes.update(data, id)
            return atualizado
        } catch (error) {
            return error
        }
    },

    Pesquisar: async (id) => {
        try {
            const localizado = await models.cartoes.findByPk(id)
            return localizado
        } catch (error) {
            return error
        }
    },


    Deletar: async (where) => {
        try {
            
            const deletado = await models.cartoes.destroy(where)
            return deletado
        } catch (error) {
            return error
        }
    }

}

module.exports = usuariosRepo;