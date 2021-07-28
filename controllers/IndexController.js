const { check, validationResult, body } = require("express-validator");
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt'); // cripto de senha
const router = require("../routes/rotasIndex");

const { Usuario, Transacoes } = require('../models');
// const config = require('../config/database')
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
 
let usuarioJson = path.join("usuarios.json");

const transacoes = [];
const cartoescadastrados = [];

const IndexController = {
    AcessoHome: (req, res) => {
        res.render('index');
    },

    verCartoes: (req, res) => {
        res.render('cartoes', {cartao: cartoescadastrados})
        
        
    },
    cadastraCartoes: (req, res) =>{
        res.render('cadastroCartoes')
    },
    guardarCartao: (req, res) => {
        let {cartaoNome, cartaoDigitos, limite, dataPagamento, credito, debito} = req.body
        let cadastrodecartao = {
            cartaoNome,
            cartaoDigitos, 
            limite,
            dataPagamento,
            credito,
            debito,
        }
        cartoescadastrados.push(cadastrodecartao)
        res.render('cartoes', {cartao: cartoescadastrados})
    },

    // CadastrarTransacao: (req, res) => {
    //     let { nomedespesa, tipodespesa, datadespesa, valordespesa } = req.body;
    //     let trancasaonova = {
    //         nomedespesa,
    //         tipodespesa,
    //         datadespesa,
    //         valordespesa,
    //     }; 
    //     ;
    //     res.render('transacoes', {transacoes: transacoes});
    // },

    CadastrarTransacaoSequelize: async (req, res) => {
        let { nomedespesa, tipodespesa, datadespesa, valordespesa } = req.body;
        const inserir = await Transacoes.create({
                    loja: nomedespesa,
                    data_da_transacao: datadespesa,
                    valor_da_transacao: valordespesa,
                    meio_de_pagamento: tipodespesa
                })

                return res.send("Adicionado com sucesso")
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

    // testeSequilize: async (req, res) => {
    //     const { nome, sobrenome, email, celular, dataNasc, senha } = req.body;
    //       const inserir = await Usuario.create({
    //         nome: nome,
    //         sobrenome: sobrenome,
    //         email: email,
    //         celular: celular,
    //         data_de_nascimento: dataNasc,
    //         senha: senha
    //     })
    //     console.log(inserir)
    //     return res.render("Adicionado com sucesso")
    // },

    salvarForm: (req, res) => {

    },

}



module.exports = IndexController
