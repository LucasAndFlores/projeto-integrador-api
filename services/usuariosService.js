const models = require('../models')
const bcrypt = require('bcrypt'); // cripto de senha
const jwt = require('jsonwebtoken');
const config = require('../config/config.json');

const usuariosService = {

    verUsuarios: async (req, res) => {
        try {
            let usuario = await models.usuarios.findAll({
            })
            res.status(200).json(usuario);
        } catch (error) {
            res.status(404)
            console.log(error);
        }
    },

    cadastrarUsuario: async (req, res) => {

        try {
            let { nome, sobrenome, email, telefone, datanasc, senha } = req.body;
            let senhaCripto = bcrypt.hashSync(senha, 10);

            const resultado = await models.usuarios.create({
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                telefone: telefone,
                datanasc: datanasc,
                senha: senhaCripto

            });

            if (resultado) {

                
                // create a jwt token that is valid for 1 day
                var bearer = jwt.sign({ sub: resultado.dataValues.id }, config.secret, { expiresIn: '1' });

                res.status(200).send(

                    {
                        date: new Date(),
                        code: 200,
                        message: "Usuário" + email + " cadastrado com sucesso!",
                        token: bearer
                    }

                );

            }

        } catch (e) {
            res.status(500).send(
                {
                    date: new Date(),
                    code: 500,
                    message: e
                }

            );
            /* if (e.parent.sqlMessage) {
                 res.status(500).send(
                     {
                         date: new Date(),
                         code: 500,
                         message: e.parent.sqlMessage
                     }
 
                 );
             } else {
                 res.status(500).send(
                     {
                         date: new Date(),
                         code: 500,
                         message: e
                     }
                 );
             }*/
        }

    },


    editarUsuario: async (req, res) => {
        try {
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

    deletarUsuario: async (req, res) => {
        try {
            let { id } = req.params
            await models.usuarios.destroy(
                { where: { id: id } }
            )
            res.status(200).send('Usuario deletado com sucesso!')

        } catch (error) {
            res.status(404)
            console.log(error)
        }
    },

    autorizarUsuario: async (req, res) => {

        try {

            let { email, senha } = req.body;

            let senhaCripto = bcrypt.hashSync(senha, 10);

            let resultado = await models.usuarios.findOne({
                where: {
                    email: email
                }

            })

            if (resultado === null) {
                res.status(200).send(
                    {
                        date: new Date(),
                        code: 200,
                        message: "Usuário não encontrado!"
                    }
                );
            } else {

                let check = bcrypt.compareSync(senha, resultado.senha);

                if (check) {

                    // create a jwt token that is valid for 1 day
                    var bearer = jwt.sign({ sub: resultado.id }, config.secret, { expiresIn: '7d' });

                    res.status(200).send(

                        {
                            date: new Date(),
                            code: 200,
                            message: "Usuário: " + email + " logado com sucesso! ",
                            token: bearer
                        }

                    );

                }
                else {
                    res.status(200).send(
                        {
                            date: new Date(),
                            code: 200,
                            message: "Usuário ou senha inválidos"
                        }

                    );
                }

            }

        } catch (e) {
            res.status(500).send(
                {
                    date: new Date(),
                    code: 500,
                    message: e.message
                }

            );
        }
    }

}

module.exports = usuariosService;