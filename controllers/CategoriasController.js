const models = require('../models')

const categoriasControoler = {
    
    todasCategoria: async (req,res) =>{
        try {
            let all = await models.categoria.findAll({
                include: {
                    model: models.transacoes,
                    as: 'transacoes'
                }
            })
            res.status(200).json(all)
        } catch (error) {
            console.log(error)
        }
    },

    cadastrarCategoria: async (req, res) => {
        try {
            let { nomeCategoria } = req.body
            const inserir = await models.categoria.create({
                nomeCategoria
            });
            res.status(200).json(inserir)
        } catch (error) {
            console.log(error)
        }
    },

    atualizarCategoria: async (req,res) => {
        try {
            let { id } = req.params
            let { nomeCategoria } = req.body;
            let atualizandoCategoria = await models.categoria.update(
                {
                    nomeCategoria
                }, 
                {
                    where: {id: id}
                }
            );
            let mostrandoCategoria = await models.categoria.findByPk(id)

            res.status(200).json(mostrandoCategoria)
        } catch (error) {
            console.log(error)
        }
    },

    destruirCategoria: async (req, res) => {
        try {
            let { id } = req.params
            let categoriaDestruir = await models.categoria.destroy(
                {where: {id: id}}
            ) 
            res.status(200).send('categoria destruida')
        } catch (error) {
            console.log(error)
        }
    }



}

module.exports = categoriasControoler