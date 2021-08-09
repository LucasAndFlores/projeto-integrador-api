const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt'); // cripto de senha
const { check, validationResult, body } = require("express-validator");
const router = require("../routes/rotasCadastro");
const db = require('../models');


const  CadastroController =  {

    acessoCadastro: (req, res) => {
        res.render('cadastro')
    },
    cadastraUsuario: async (req, res) => {

        let listaDeErrors = validationResult(req);

        if (listaDeErrors.isEmpty()) {

            if (req.file) {
                const { filename } = req.file;

                return res.redirect('/index'/* , { image: `/storage/${filename}` } */);
            } else {
                let { nome, sobrenome, email, celular, dataNasc, senha } = req.body;
                let senhaCripto = bcrypt.hashSync(senha, 10);

                const resultado = await db.usuarios.create({
                    nome: nome,
                    sobrenome: sobrenome,
                    email: email,
                    telefone: celular,
                    datanasc: dataNasc,
                    senha: senhaCripto

                }).then( () => {
                   return res.redirect('/login');
                }).catch( err => {
                    if(err.errors[0].type === "unique violation"){ // e-mail ja cadastrado
                        
                        return res.send("E-mail já cadastrado!");
                    }else{
                        return res.send(err);
                    }
                })

            }
        }
        else {
            return res.render('cadastro', { errors: listaDeErrors.errors })
        }
    },

    salvarForm: (req, res) => {

    },

}


module.exports = CadastroController;