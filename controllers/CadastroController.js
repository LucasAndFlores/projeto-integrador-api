const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt'); // cripto de senha
const { check, validationResult, body } = require("express-validator");
const router = require("../routes/rotasCadastro");
let usuarioJson = path.join("usuarios.json");

const CadastroController = {

    acessoCadastro: (req,res) => {
        res.render('cadastro')
    },
    cadastraUsuario: (req, res) => {

        let listaDeErrors = validationResult(req);

        if (listaDeErrors.isEmpty()) {

            if (req.file) {
                const { filename } = req.file;

                return res.redirect('/index'/* , { image: `/storage/${filename}` } */);
            } else {
                let { nome, sobrenome, email, celular, dataNasc, senha } = req.body;
                let usuario = JSON.stringify({ nome, sobrenome, email, celular, dataNasc, senha });


                if (fs.readFileSync(usuarioJson).length === 0) {
                    let usuarios = []
                    usuarios.push(usuario);

                    fs.writeFileSync(usuarioJson, JSON.stringify(usuarios), { encoding: 'utf-8' });
                    res.send("Usuario cadastrado com sucesso!!");

                } else {
                    let usuarios = []

                    usuarios = JSON.parse(fs.readFileSync(usuarioJson));

                    usuarios.push(usuario);

                    fs.writeFileSync(usuarioJson, JSON.stringify(usuarios), { encoding: 'utf-8' });
                    /* res.send("Usuario cadastrado com sucesso!!!"),  */res.redirect('/index');

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


module.exports = CadastroController;