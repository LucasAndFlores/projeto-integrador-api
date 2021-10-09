const entradasRepo = require('../repository/entradasRepo');

const entradasService = {

    verEntradasPorId: async (req, res) => {
        try {
            let { id } = req.params
            let entradasExistenteId = await entradasRepo.BuscarTodasId({
                where: { fkUsuarioId: id }
            })
            return entradasExistenteId
        } catch (error) {
            res.send(error) 
            
        }
    },

    verEntradas: async (req, res) => {
        try {
            let entradasExistente = await entradasRepo.BuscarTodas()
            return entradasExistente
        } catch (error) {
            res.send(error) 
            
        }
    },

    criarEntrada: async (req, res) => {
        try {
            let { nome, valor, data, fkUsuarioId } = req.body           
            const inserir = await entradasRepo.Criar({  
                nome,
                valor,
                data,
                fkUsuarioId                
            });
            return inserir
        } catch (error) {
            return  error
        }
    },

    editarEntrada: async (req,res) => {
        try {
            let { id } = req.params
            let { nome, valor, data } = req.body;
            const atualizar = await entradasRepo.Atualizar(
                {
                    nome,
                    valor,
                    data
                }, 
                {
                    where: {id: id}
                }
            );
            const atualizado = await entradasRepo.Pesquisar(
                id = id
            
            )
            return atualizado
        } catch (error) {
            return error
        }
    },

    deletarEntrada: async (req, res) => {
        try {
            let { id } = req.params
            let deletando = await entradasRepo.Deletar({where: {id: id}})
            return deletando
        } catch (error) {
            return error
        }
    }
}

module.exports = entradasService