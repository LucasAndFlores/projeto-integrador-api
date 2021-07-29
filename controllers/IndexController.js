const router = require("../routes/rotasIndex");

const { Usuario, Transacoes } = require('../models');
// const config = require('../config/database')
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
 


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



}



module.exports = IndexController
