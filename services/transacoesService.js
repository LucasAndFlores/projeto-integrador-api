const transacoesRepo = require('../repository/transacoesRepo')

const transacoesService = {

    VerTodas: async () => {

        try {
            let transacoesExistente = await transacoesRepo.BuscarTodas()
            return transacoesExistente
        } catch (error) {
            return error 
            
        }
    },

    CriarTransacao: async (req) => {
        try {
            let { loja, dataTransacao, meioPagamento, valor, fkCategoriaId } = req;
            const inserir = await transacoesRepo.Criar({  
                loja,
                dataTransacao,
                valor,
                meioPagamento,
                fkCategoriaId
            })
            return inserir
        } catch (error) {
            return error
        }  
    },

    atualizarTransacao: async (req) => {

        try {
            

            let { id } = req.params
            let { loja, dataTransacao, meioPagamento, valor, fkCategoriaId } = req.body;
            const atualizar = await transacoesRepo.Atualizar(
                {
                    loja,
                    dataTransacao,
                    valor,
                    meioPagamento,
                    fkCategoriaId
                }, {
                    where: {id: id}
                }
            )
            const atualizado = await transacoesRepo.Pesquisar(
                id = id
            
            )
            return atualizado
        } catch (error) {
            return error
        }
       
    }, 

    DeletarTransacao: async (req) => {
        
        try {
            let { id } = req.params;
            let deletando = await transacoesRepo.Deletar({where: {id: id}})
            return deletando 
        } catch (error) {
            return error
        }
    },

}

module.exports = transacoesService