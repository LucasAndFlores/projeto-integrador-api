const Joi = require('joi')
const schemas = {
    transacoes: Joi.object().keys({
        loja: Joi.string().required(),
        dataTransacao: Joi.date().required(),
        valor: Joi.number().required(),
        meioPagamento: Joi.string().required(),
        fkCategoriaId: Joi.number().required(),
        fkUsuarioId: Joi.number()
    }), 
    categoria: Joi.object().keys({
        nomeCategoria: Joi.string().required()
    }),
    cartoes:Joi.object().keys({
        name: Joi.string().required(),
        digitos: Joi.number().required(),
        limite: Joi.number().required(),
        dataDePagamento: Joi.date().required(),
        tipo: Joi.string().required(),
        fkUsuarioId: Joi.number()
    }),
    entradas: Joi.object().keys({
        nome: Joi.string().required(),
        valor: Joi.number().required(),
        data: Joi.date().required(),
        fkUsuarioId: Joi.number()
    }),
    objetivos: Joi.object().keys({
        objetivo: Joi.string().required(),
        alvo: Joi.number().required(),
        dataAlvo: Joi.date().required(),
        fkUsuarioId: Joi.number()
    }),
    usuarios: Joi.object().keys({
        nome: Joi.string().required(),
        sobrenome: Joi.string().required(),
        email: Joi.string().required(),
        telefone: Joi.string().required()
    })
}
module.exports = schemas