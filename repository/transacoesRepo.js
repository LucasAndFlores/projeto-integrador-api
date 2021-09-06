const models = require('../models')

module.exports = {

    BuscarTodas: async () => {
        try {
            const todosUsuarios = await models.transacoes.findAll({})
            return todosUsuarios
        } catch (error) {
            return error
        }
    },

    Criar: async data => {
        try {
            const inserir = await models.transacoes.create(data)
            return inserir
        } catch (error) {
            return error
        }
    },
    
    Atualizar: async (data, id) => {
        try {
            const atualizando = await models.transacoes.update(data,id)
            return atualizando 
        } catch (error) {
            return error
        }
    },

    Pesquisar: async (id) => {
        try {
            const localizado = await models.transacoes.findByPk(id)
            return localizado
        } catch (error) {
            return error
        }
    },

    Deletar: async (where) => {
        try {
           const deletar = await models.transacoes.destroy(where) 
           return "transação deletada"
        } catch (error) {
            return error
        }
    }

}