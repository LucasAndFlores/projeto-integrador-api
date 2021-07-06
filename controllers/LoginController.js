const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt'); // cripto de senha

const CheckUserController = require('./CheckUserController');

const { check, validationResult, body } = require("express-validator")

let usuarioJson = path.join("usuarios.json");

const LoginController = {
    acessoLogin: (req, res) => {
        res.render('login');
    },

    verRecuperarSenha: (req, res) => {
        return res.render('loginForgotPsw');
    },

    autenticaUsuario: (req, res) => {
        console.log(validationResult(req));
        console.log(req.body, req.file);
        /* res.redirect('/index'); */

        let listaDeErrors = validationResult(req);

        if (listaDeErrors.isEmpty()) {
            //const { filename } = req.file;

            let { email, senha } = req.body;

            let found = false;

            found = CheckUserController(email, senha);

    
            if (found) { return res.render('index', { email: email }) } else { return res.send("Usuario ou senha invalidos") }

        }
        else {
            return res.render('login', { errors: listaDeErrors.errors })
        }

    },

}

module.exports = LoginController;

