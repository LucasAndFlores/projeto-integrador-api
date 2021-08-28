const models = require('../models')

const cartoesController = {
    verCartoes: 
        async (req, res) => {
            try {
                let cartoesexistente = await models.cartoes.findAll({});
                res.status(200).json(cartoesexistente)
            } catch (error) {
                console.log(error)
            }
    },

    guardarCartao: async (req, res) => {
        try {
            let {name, digitos, limite, dataDePagamento, tipo} = req.body
            const inserir = await models.cartoes.create({
                name,
                digitos,
                limite,
                dataDePagamento,
                tipo
            })
            res.status(200).json(inserir)
        } catch (error) {
            console.log(error)
        }


    },

    atualizarCartao: async (req,res) => {
        try {
            let { id } = req.params
            let { name, digitos, limite, dataDePagamento, tipo } = req.body
            let atualizandoCartao = await models.cartoes.update(
                {
                    name,
                    digitos,
                    limite,
                    dataDePagamento,
                    tipo
                }, 
                {
                    where: {id: id}
                }
            );
            let cartaoAtualizado = await models.cartoes.findByPk(id)

            res.status(200).json(cartaoAtualizado)
            
        } catch (error) {
            console.log(error)
        }
    },

    destruirCartao: async (req,res) => {
        try {
            let { id } = req.params
            let cartaoDestruir = await models.cartoes.destroy(
                {where: {id: id}}
            ) 
            res.status(200).send('cartao destruido')
            
        } catch (error) {
            console.log(error)
        }
    }


}



module.exports = cartoesController
