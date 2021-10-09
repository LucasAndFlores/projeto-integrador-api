const models = require('../models')

module.exports = {

    BuscarTodas: async () => {
        try {
            const todosEntradas = await models.entrada.findAll({})
            return todosEntradas
        } catch (error) {
            return error
        }
    },

    BuscarTodasId: async (where) => {
        try {
            const todosEntradas = await models.entrada.findAll(where)
            return todosEntradas
        } catch (error) {
            return error
        }
    },

    Criar: async data => {
        try {
            const inserir = await models.entrada.create(data)
            return inserir
        } catch (error) {
            return error
        }
    },
    
    Atualizar: async (data, id) => {
        try {
            const atualizando = await models.entrada.update(data,id)
            return atualizando 
        } catch (error) {
            return error
        }
    },

    Pesquisar: async (id) => {
        try {
            const localizado = await models.entrada.findByPk(id)
            return localizado
        } catch (error) {
            return error
        }
    },

    Deletar: async (where) => {
        try {
           const deletar = await models.entrada.destroy(where) 
           return "Entrada deletada"
        } catch (error) {
            return error
        }
    }

}

