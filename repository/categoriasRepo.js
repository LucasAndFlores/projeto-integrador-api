const models = require('../models')

module.exports = {

    BuscarTodas: async () => {
        try {
            const listarTodos = await models.categoria.findAll({
                include: {
                    model: models.transacoes,
                    as: 'transacoes'
                }
            })
            return listarTodos
        } catch (error) {
            return error
        }
    },

    Criar: async data => {
        try {
            const inserir = await models.categoria.create(data)
            return inserir
        } catch (error) {
            return error
        }
    },
    
    Atualizar: async (data, id) => {
        try {
            const atualizando = await models.categoria.update(data,id)
            return atualizando 
        } catch (error) {
            return error
        }
    },

    Pesquisar: async (id) => {
        try {
            const localizado = await models.categoria.findByPk(id)
            return localizado
        } catch (error) {
            return error
        }
    },

    Deletar: async (where) => {
        try {
           const deletar = await models.categoria.destroy(where) 
           return "categoria deletada"
        } catch (error) {
            return error
        }
    }

}