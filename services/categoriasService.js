const categoriaRepo = require('../repository/categoriasRepo')

const categoriasService = {

    verTodas: async () => {

        try {
            let categoriasExistente = await categoriaRepo.BuscarTodas()
            return categoriasExistente
        } catch (error) {
            res.send(error) 
            
        }
    },

    criarCategoria: async (req) => {
        try {
            let { nomeCategoria } = req.body ;
            const inserir = await categoriaRepo.Criar({  
                nomeCategoria  
            })
            return inserir
        } catch (error) {
            return (error)
        }  
    },

    atualizarCategoria: async (req) => {

        try {
            let { id } = req.params
            let { nomeCategoria } = req.body;
            const atualizar = await categoriaRepo.Atualizar(
                {
                    nomeCategoria
                }, {
                    where: {id: id}
                }
            )
            const atualizado = await categoriaRepo.Pesquisar(
                id = id
            
            )
            return atualizado
        } catch (error) {
            return error
        }
       
    }, 

    deletarCategoria: async (req) => {
        
        try {
            let { id } = req.params;
            let deletando = await categoriaRepo.Deletar({where: {id: id}})
            return deletando 
        } catch (error) {
            return error
        }
    },

}

module.exports = categoriasService