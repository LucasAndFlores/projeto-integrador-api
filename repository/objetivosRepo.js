const models = require('../models')

module.exports = {

    BuscarTodas: async () => {
        try {
            const todosObjetivos = await models.objetivo.findAll({})
            return todosObjetivos
        } catch (error) {
            return error
        }
    },

    Criar: async data => {
        try {
            const inserir = await models.objetivo.create(data)
            return inserir
        } catch (error) {
            return error
        }
    },
    
    Atualizar: async (data, id) => {
        try {
            const atualizando = await models.objetivo.update(data,id)
            return atualizando 
        } catch (error) {
            return error
        }
    },

    Pesquisar: async (id) => {
        try {
            const localizado = await models.objetivo.findByPk(id)
            return localizado
        } catch (error) {
            return error
        }
    },

    Deletar: async (where) => {
        try {
           const deletar = await models.objetivo.destroy(where) 
           return "Objetivo deletado"
        } catch (error) {
            return error
        }
    }

}

