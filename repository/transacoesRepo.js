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
            const atualizado = await models.transacoes.findByPK(id)
            return atualizado 
        } catch (error) {
            return error
        }
    }

}