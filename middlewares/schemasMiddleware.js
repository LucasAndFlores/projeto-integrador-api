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
    }),
    cartoes:Joi.object().keys({
        name: Joi.string().required(),
        digitos: Joi.number().required(),
        limite: Joi.number().required(),
        dataDePagamento: Joi.number().required(),
        tipo: Joi.string().required()
    }),
    entradas: Joi.object().keys({
        nome: Joi.string().required(),
        valor: Joi.number().required(),
        data: Joi.date().required(),
        /* fkUsuarioId: Joi.number().required() */
    }),
    objetivos: Joi.object().keys({
        objetivo: Joi.string().required(),
        alvo: Joi.number().required(),
        dataAlvo: Joi.date().required(),
        /* fkUsuarioId: Joi.number().required() */
    }),
    usuarios: Joi.object().keys({
        nome: Joi.string().required(),
        sobrenome: Joi.string().required(),
        email: Joi.string().required(),
        telefone: Joi.string().required(),
        datanasc: Joi.date().required(),
        senha: Joi.string().required()
    })
}
module.exports = schemas