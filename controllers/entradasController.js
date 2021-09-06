const models = require('../models');
const { Op } = require('sequelize');

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
            
            let localizarEntrada = await models.entrada.findOne({
                where: {
                    nome:{
                        [Op.or]: {
                            [Op.eq]: nome,
                            [Op.like]: nome,
                        }
                    }
            }});
            if (localizarEntrada) {
                res.send("Entrada já existente")
            } else {

            const inserir = await models.entrada.create({
                nome,
                valor,
                data,
            });
            res.status(200).json(inserir)
        }
        } catch (error) {
            console.log(error)
        }
    },

    editarEntrada: async (req,res) => {
        try {
            let { id } = req.params
            let { nome, valor, data } = req.body;
            let atualizandoEntrada = await models.entrada.update(
                {
                    nome,
                    valor,
                    data
                }, 
                {
                    where: {id: id}
                }
            );
            let mostrandoEntrada = await models.entrada.findByPk(id)

            res.status(200).json(mostrandoEntrada)
        } catch (error) {
            console.log(error)
        }
    },

    deletarEntrada: async (req, res) => {
        try {
            let { id } = req.params
            let entradaDestruir = await models.entrada.destroy(
                {where: {id: id}}
            ) 
            res.status(200).send('entrada destruida')
        } catch (error) {
            console.log(error)
        }
    }



}

module.exports = entradasController