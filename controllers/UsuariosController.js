const router = require("../routes/rotasIndex");
const models = require('../models')
const bcrypt = require('bcrypt'); // cripto de senha
const { check, validationResult, body } = require("express-validator");
const db = require('../models');

const usuariosController = {

    verUsuarios: async (req, res) => {     
        try{               
            let usuario = await models.usuarios.findAll({
            })
            res.status(200).json(usuario);
        } catch (error) {
            res.status(404) 
            console.log(error)
        }
    },

    cadastrarUsuario: async (req, res) => {

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
                   return res.status(200).json('Usuário cadastrado com sucesso!');
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

    editarUsuario: async (req, res) => {
        try{
            const { id } = req.params            
            const { nome, sobrenome, telefone } = req.body;            
            await models.usuarios.update({ 
                nome, 
                sobrenome, 
                telefone 
            },
            {
                where: {
                    id
                }
            });                    
            let mostrandoUsuario = await models.usuarios.findByPk(id)

            res.status(200).json(mostrandoUsuario)
            
        } catch (error) {
            res.status(404) 
            console.log(error)
        }    
            
    },

    deletarUsuario: async (req,res) => {
        try {
            let { id } = req.params
            await models.usuarios.destroy(
                {where: {id: id}}
            ) 
            res.status(200).send('Usuario deletado com sucesso!')
            
        } catch (error) {
            res.status(404) 
            console.log(error)
        }
    }

}

module.exports = usuariosController