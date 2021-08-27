/* const router = require("../routes/rotasIndex"); */
const models = require('../models')

const IndexController = {
    AcessoHome: (req, res) => {
        if (!req.session.usuario) {
            res.redirect('login');
        } else {
            res.render('index', { usuario: req.session.usuario });
        }

    },

    verEntradas: (req, res) => {
        res.render('entradas');
    },

    verObjetivos: (req, res) => {
        res.render("objetivos_v1");
    },

    verConfiguracoes: async (req, res) => {     
        try{               
            let usuario = await models.usuarios.findAll({
            })
            res.status(200).json(usuario);
        } catch (error) {
            res.status(404) 
            console.log(error)
        }
    },

    editarUsuarios: async (req, res) => {
        try{
            const { id } = req.params            
            const { nome, sobrenome, telefone } = req.body;            
            let usuario = await models.usuarios.update({ 
                nome, 
                sobrenome, 
                telefone 
            },
            {
                where: {
                    id
                }
            });                    
            let mostrandoUsuario = await models.usuarios.findByPk(id)

            res.status(200).json(mostrandoUsuario)
            
        } catch (error) {
            res.status(404) 
            console.log(error)
        }    
            
    },

    salvarForm: (req, res) => {

    },

    verEntradas: async (req, res) => {
        let entradasExistentes = await models.entrada.findAll({});
        res.render('entradas', { entradasExistentes })
    },

    cadastrarEntradas: async (req, res) => {
        let { nome, valor, data } = req.body
        const inserir = await models.entrada.create({
            nome,
            valor,
            data,
        });
        res.redirect('entradas')
    },

}


module.exports = IndexController
