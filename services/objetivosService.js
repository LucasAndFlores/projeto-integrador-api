const objetivosRepo = require('../repository/objetivosRepo');

const objetivosService = {

    verObjetivos: async (req, res) => {

        try {
            let objetivosExistente = await objetivosRepo.BuscarTodas()
            return objetivosExistente
        } catch (error) {
            res.send(error) 
            
        }
    },

    buscarObjetivosUsuario: async (req, res) => {
        
        
        try {
            let { id } = req.params;
            let todosObjetivosUsuario = await objetivosRepo.BuscarTodas({ where: { fkUsuarioId: id }})
            return todosObjetivosUsuario
        } catch (error) {
            res.send(error) 
            
        }
    },

    criarObjetivo: async (req, res) => {
        try {
            let { objetivo, alvo, dataAlvo, fkUsuarioId } = req.body;
            const inserir = await objetivosRepo.Criar({
                    objetivo,
                    alvo,
                    dataAlvo,   
                    fkUsuarioId
                })

                return inserir
        } catch (error) {
            return(error)
        }
    },
    
    editarObjetivo: async (req,res) => {
        try {
            let { id } = req.params
            let { objetivo, alvo, dataAlvo } = req.body;
            const atualizar = await objetivosRepo.Atualizar(
                {
                    objetivo,
                    alvo,
                    dataAlvo
                }, 
                {
                    where: {id: id}
                }
            );
            const atualizado = await objetivosRepo.Pesquisar(
                id = id
            
            )
            return atualizado
        } catch (error) {
            return error
        }
       
    }, 

    deletarObjetivo: async (req, res) => {
        try {
            let { id } = req.params;
            let deletando = await objetivosRepo.Deletar({where: {id: id}})
            return deletando 
        } catch (error) {
            return error
        }
    },

}

module.exports = objetivosService