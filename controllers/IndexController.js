const router = require("../routes/rotasIndex");
const models = require('../models')

const IndexController = {
    AcessoHome: (req, res) => {
        res.render('index');
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
    cadastraUsuario: (req, res) => {

        let listaDeErrors = validationResult(req);

        if (listaDeErrors.isEmpty()) {

            if (req.file) {
                const { filename } = req.file;

                return res.render('index', { image: `/storage/${filename}` });
            } else {
                let { nome, sobrenome, email, celular, dataNasc, senha } = req.body;
                let usuario = JSON.stringify({ nome, sobrenome, email, celular, dataNasc, senha });


                if (fs.readFileSync(usuarioJson).length === 0) {
                    let usuarios = []
                    usuarios.push(usuario);

                    fs.writeFileSync(usuarioJson, JSON.stringify(usuarios), { encoding: 'utf-8' });
                    res.send("Usuario cadastrado com sucesso!");

                } else {
                    let usuarios = []

                    usuarios = JSON.parse(fs.readFileSync(usuarioJson));

                    usuarios.push(usuario);

                    fs.writeFileSync(usuarioJson, JSON.stringify(usuarios), { encoding: 'utf-8' });
                    res.send("Usuario cadastrado com sucesso!");


                }

            }
        }
        else {
            return res.render('cadastro', { errors: listaDeErrors.errors })
        }
    },  
    
    salvarForm: (req, res) => {

    },

    verEntradas: async (req, res) => {
        let entradasExistentes = await models.entrada.findAll({});
        res.render('entradas', {entradasExistentes})       
    },

    cadastrarEntradas: async (req, res) => {
            let {nome, valor, data} = req.body
            const inserir = await models.entrada.create({
                nome,
                valor,
                data,                
            });
            res.redirect('entradas')
    },
    
}


module.exports = IndexController
