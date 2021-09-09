const entradasRepo = require('../repository/entradasRepo');

const entradasService = {

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
            let { nome, valor, data } = req.body
            
            const inserir = await entradasRepo.Criar({  
                where: {
                    nome:{
                        [Op.or]: {
                            [Op.eq]: nome,
                            [Op.like]: nome,
                        }
                    }
            }});
            if (localizarEntrada) {
                res.send("Entrada já existente")
            } else {

            const inserir = await models.entrada.create({
                nome,
                valor,
                data,
            });
            return inserir
        }
        } catch (error) {
            return(error)
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
            res.status(200).send('entrada destruida')
        } catch (error) {
            return error
        }
    }
}

module.exports = entradasService