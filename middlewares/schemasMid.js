const Joi = require('joi')
const schemas = {
    transacoes: Joi.object().keys({
        loja: Joi.string().required(),
        dataTransacao: Joi.date().required(),
        valor: Joi.number().required(),
        meioPagamento: Joi.string().required(),
        fkCategoriaId: Joi.number().required()
    }), 
    categoria: Joi.object().keys({
        nomeCategoria: Joi.string().required()
    })
}
module.exports = schemas