const models = require('../models')

const objetivosController = {

    verObjetivos: async (req, res) => {

        try {
            let objetivosExistente = await models.objetivo.findAll({ 
            });
            res.status(200).json(objetivosExistente)  
        } catch (error) {
            res.status(404) 
            console.log(error)
        }
    },

    criarObjetivo: async (req, res) => {
        try {
            let { objetivo, alvo, dataAlvo } = req.body;
            const inserir = await models.objetivo.create({
                    objetivo,
                    alvo,
                    dataAlvo
                })

             res.status(200).json(inserir)
        } catch (error) {
            res.status(404) 
            console.log(error)
        }
    },
    
    editarObjetivo: async (req,res) => {
        try {
            let { id } = req.params
            let { objetivo, alvo, dataAlvo } = req.body;
            let atualizandoObjetivo = await models.objetivo.update(
                {
                    objetivo,
                    alvo,
                    dataAlvo
                }, 
                {
                    where: {id: id}
                }
            );
            let mostrandoObjetivo = await models.objetivo.findByPk(id)

            res.status(200).json(mostrandoObjetivo)
        } catch (error) {
            res.status(404) 
            console.log(error)
        }
    },

    deletarObjetivo: async (req, res) => {
        try {
            let { id } = req.params
            let objetivoDestruir = await models.objetivo.destroy(
                {where: {id}}
            ) ;
            res.status(200).send('Objetivo deletado com sucesso!')
        } catch (error) {
            res.status(404) 
            console.log(error)
        }
    }

}

module.exports = objetivosController
