const models = require('../models')

module.exports = {

    BuscarPorId: async (where) => {
        try {
            const BuscarTransacaoId = await models.transacoes.findAll(where)
            return BuscarTransacaoId
        } catch (error) {
            return (`Erro ao listar transacões: ${error.original.sqlMessage}`)
        }
    },

    BuscarTodas: async (where) => {
        try {
            const todosUsuarios = await models.transacoes.findAll(where)
            return todosUsuarios
        } catch (error) {
            return (`Erro ao listar transacões: ${error.original.sqlMessage}`)
        }
    },

    Criar: async data => {
        try {
            const inserir = await models.transacoes.create(data)
            return inserir
        } catch (error) {
          return (`Erro ao criar transacão: ${error.original.sqlMessage}`)
            // console.log(error.original.sqlMessage)
        }
    },
    
    Atualizar: async (data, id) => {
        try {
            
            const atualizando = await models.transacoes.update(data,id)
            return atualizando 
        } catch (error) {
            return (`Erro ao atualizar transação: ${error.original.sqlMessage}`)
        }
    },

    Pesquisar: async (id) => {
        try {
            const localizado = await models.transacoes.findByPk(id)
            return localizado
        } catch (error) {
            return (`Erro ao pesquisar transação: ${error.original.sqlMessage}`)
        }
    },

    Deletar: async (where) => {
        try {
           const deletar = await models.transacoes.destroy(where) 
           return "transação deletada"
        } catch (error) {
            return (`Error: ${error.original.sqlMessage}`)
        }
    }

}