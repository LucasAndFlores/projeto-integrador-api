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

    criarEntrada: async (req, res) => {
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
    },

    editarEntrada: async (req, res) => {
        try {
            let { id } = req.params
            let { nome, valor, data } = req.body
            let atualizandoEntrada = await models.entrada.update(
                {
                    nome,
                    valor,
                    data
                },
                {
                    where: {id}
                }
            );
            let entradaAtualizada = await models.entrada.findByPk(id)

            res.status(200).json(entradaAtualizada)

        } catch (error) {
            res.status(404)

        }
    },

    deletarEntrada: async (req,res) => {
        try {
            let { id } = req.params
            let entradaDestruir = await models.entrada.destroy(
                {
                    where: {id}
                }
            ); 
            res.status(200).send('Entrada deletado com sucesso!')
            
        } catch (error) {
            res.status(404) 
            console.log(error)
        }
    }



}

module.exports = entradasController