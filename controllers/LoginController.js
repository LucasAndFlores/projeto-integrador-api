const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt'); // cripto de senha



const { check, validationResult, body } = require("express-validator")

const db = require('../models');

const LoginController = {
    acessoLogin: (req, res) => {
        res.render('login');
    },

    verRecuperarSenha: (req, res) => {
        return res.render('loginForgotPsw');
    },

    autenticaUsuario: (req, res) => {

        /* res.redirect('/index'); */

        let listaDeErrors = validationResult(req);

        if (listaDeErrors.isEmpty()) {


            let { email, senha } = req.body;

            let senhaCripto = bcrypt.hashSync(senha, 10);

            resultado = db.usuarios.findOne({
                where: {
                    email: email
                }

            }).then((resultado) => {
                
                if (resultado !== null) {
                    let check = bcrypt.compareSync(senha, resultado.senha);
                    if(check){ 

                        req.session.usuario = resultado;
                        return res.redirect('/index');    

                    }
                    else{ return res.send("Usuario ou senha invalidos");}
                    
                } else {
                    return res.send("Usuario ou senha invalidos");
                }
            }).catch(error => {
                return res.send("Usuario ou senha invalidos")
            });


        }
        else {
            return res.render('login', { errors: listaDeErrors.errors })
        }

    },

}

module.exports = LoginController;

