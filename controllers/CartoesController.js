const models = require('../models')

const cartoesController = {
    verCartoes: 
        async (req, res) => {
            try {
                let cartoesexistente = await models.cartoe.findAll({});
                res.status(200).json(cartoesexistente)
            } catch (error) {
                res.status(404) 
                console.log(error)
            }
    },

    criarCartao: async (req, res) => {
        try {
            let {name, digitos, limite, data_de_pagamento, tipo} = req.body
            const inserir = await models.cartoe.create({
                name,
                digitos,
                limite,
                data_de_pagamento,
                tipo
            })
            res.status(200).json(inserir)
        } catch (error) {
            res.status(404) 
            console.log(error)
        }


    },

    editarCartao: async (req,res) => {
        try {
            let { id } = req.params
            let { name, digitos, limite, data_de_pagamento, tipo } = req.body
            let atualizandoCartao = await models.cartoe.update(
                {
                    name,
                    digitos,
                    limite,
                    data_de_pagamento,
                    tipo
                }, 
                {
                    where: {id: id}
                }
            );
            let cartaoAtualizado = await models.cartoe.findByPk(id)

            res.status(200).json(cartaoAtualizado)
            
        } catch (error) {
            res.status(404) 
            console.log(error)
        }
    },

    deletarCartao: async (req,res) => {
        try {
            let { id } = req.params
            let transacaoDestruir = await models.cartoe.destroy(
                {where: {id: id}}
            ) 
            res.status(200).send('Cartao deletado com sucesso!')
            
        } catch (error) {
            res.status(404) 
            console.log(error)
        }
    }


}



module.exports = cartoesController
