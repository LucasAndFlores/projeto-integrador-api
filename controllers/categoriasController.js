const models = require('../models')

const categoriasControoler = {
    todasCategorias: async (req,res) =>{
        let all = await models.categoria.findAll({
            include: {
                model: models.transacoe,
                as: 'transacoes'
            }
        })
        res.json(all)
    }
}

module.exports = categoriasControoler