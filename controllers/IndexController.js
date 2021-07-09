const { check, validationResult, body } = require("express-validator");
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt'); // cripto de senha
const router = require("../routes/rotasIndex");

let usuarioJson = path.join("usuarios.json");

const transacoes = [];

const IndexController = {
    AcessoHome: (req, res) => {
        res.render('index');
    },

    verCartoes: (req, res) => {
        //let dadosCartao= {
            //limite: req.body.limite,
            //numero: req.body.cartaoDigitos,
            //bandeira: req.body.cartaoNome,
            //pagamento: req.body.dataPagamento,
            //tipo: req.body.tipoCartao
        //}
        res.render('cartoes')
        
    },
    cadastraCartoes: (req, res) =>{
        res.render('cadastroCartoes')
    },
    guardarCartao: (req, res) => {
        console.log(req.body);
        res.redirect('/index/cartoes')
    },

    CadastrarTransacao: (req, res) => {
        let { nomedespesa, tipodespesa, datadespesa, valordespesa } = req.body;
        let trancasaonova = {
            nomedespesa,
            tipodespesa,
            datadespesa,
            valordespesa,
        }; 
        transacoes.push(trancasaonova);
        res.render('transacoes', {transacoes: transacoes});
    },

    verTransacoes: (req, res) => {
        res.render('transacoes', {transacoes: transacoes});
    },

    verEntradas: (req, res) => {
        res.send("Ver entradas");
    },

    verObjetivos: (req, res) => {
        res.render("objetivos_v1");
    },

    verConfiguracoes: (req, res) => {
        res.render('configuracoes');
    },

    cadastraUsuario: (req, res) => {
        console.log(validationResult(req));
        console.log(req.body, req.file);


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

}

module.exports = IndexController
