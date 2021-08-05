const models = require('../models')

const cartoesController = {
    verCartoes: async (req, res) => {
        let cartoesexistente = await models.cartoe.findAll({});
        res.render('cartoes', {cartoesexistente})       
    },

    cadastrarCartao: (req,res) => {
        res.render('cadastroCartoes')
    },

    guardarCartao: async (req, res) => {
        let {name, digitos, limite, data_de_pagamento, tipo} = req.body
        const inserir = await models.cartoe.create({
            name,
            digitos,
            limite,
            data_de_pagamento,
            tipo
        })
        res.redirect('cartoes')
    },

}



module.exports = cartoesController
