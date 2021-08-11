const router = require("../routes/rotasIndex");
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

    verConfiguracoes: (req, res) => {
        res.render('configuracoes');
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
