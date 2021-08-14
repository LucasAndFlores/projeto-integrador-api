const models = require('../models');

const entradasController = {

    verEntradas: async (req, res) => {
        try {
            let entradasExistentes = await models.entrada.findAll({});
            res.status(200).json(entradasExistentes)
        } catch (error) {
            console.log(error)
        }    
    },

    cadastrarEntradas: async (req, res) => {
        try {
            let { nome, valor, data } = req.body
            const inserir = await models.entrada.create({
                nome,
                valor,
                data,
            });
            res.status(200).json(inserir)
        } catch (error) {
            console.log(error)
        }
}



}

module.exports = entradasController