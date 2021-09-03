const transacoesRepo = require('../repository/transacoesRepo')

const transacoesService = {

    VerTodas: async () => {

        try {
            let transacoesExistente = await transacoesRepo.BuscarTodas()
            return transacoesExistente
        } catch (error) {
            res.send(error) 
            
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
            return (error)
        }  
    },

    atualizarTransacao: async (req) => {
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
        
        return atualizar
    }

}

module.exports = transacoesService