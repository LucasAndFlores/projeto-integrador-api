const { check, validationResult, body } = require("express-validator");
const fs = require('fs');
const path = require('path');

let usuarioJson = path.join("usuarios.json");

const IndexController = {
    verCartoes: (req, res) => {
        res.send('Ver cartões');
    },

    verTransacoes: (req, res) => {
        res.send("Ver transações");
    },

    verEntradas: (req, res) => {
        res.send("Ver entradas");
    },

    verObjetivos: (req, res) => {
        res.send("Ver objetivos");
    },

    verConfiguracoes: (req, res) => {
        res.render('configuracoes');
    },

    cadastraUsuario: (req, res) => {
        console.log(validationResult(req));
        console.log(req.body, req.file);   
/*         let {nome, sobrenome, email, celular, dataNasc, senha, confirmasenha} = req.body;
        let usuario = JSON.stringify({nome, sobrenome, email, celular, dataNasc, senha, confirmasenha});

        fs.writeFileSync(usuarioJson, usuario, {encoding:'utf-8'});  */
        /* res.send("Usuário cadastrado")  */  
        
        let listaDeErrors = validationResult(req);

        if(listaDeErrors.isEmpty()) {
        const {filename} = req.file;

        return res.render('index', { image: `/storage/${filename}` }); 
    }   
        else {
            return res.render('cadastro', {errors:listaDeErrors.errors})           
        }
    },

    salvarForm: (req, res) => {
        let {nome, sobrenome, email, celular, dataNasc, senha, confirmasenha} = req.body;
        let usuario = JSON.stringify({nome, sobrenome, email, celular, dataNasc, senha, confirmasenha});

        fs.writeFileSync(usuarioJson, usuario, {encoding:'utf-8'});
    },

}

module.exports = IndexController
