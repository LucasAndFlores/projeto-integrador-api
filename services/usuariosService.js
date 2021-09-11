
const bcrypt = require('bcrypt');
const usuariosRepo = require('../repository/usuariosRepo');
const autenticacao = require('../common/autenticacao');

const usuariosService = {

    verUsuarios: async (req, res) => {
        try {
            let todosUsuarios = await usuariosRepo.BuscarTodas();
            res.status(200).json({

                date: new Date(),
                code: 200,
                todosUsuarios

            });
        } catch (error) {
            res.status(500).json({

                date: new Date(),
                code: 500,
                message: error

            });
        }
    },

    verUsuario: async (req, res) => {
        try {
            let usuario = await usuariosRepo.Pesquisar(req.params.id);
            if (usuario) {
                res.status(200).json({

                    date: new Date(),
                    code: 200,
                    usuario

                });
            } else {
                res.status(200).json({

                    date: new Date(),
                    code: 200,
                    message: "Usuário não encontrado!"

                });
            }
        } catch (error) {
            res.status(500).json({

                date: new Date(),
                code: 500,
                message: error

            });
        }
    },

    cadastrarUsuario: async (req, res) => {

        try {
            let bodyCopy = req.body;
            bodyCopy.senha = bcrypt.hashSync(req.body.senha, 10);

            let criado = await usuariosRepo.Criar(bodyCopy);

            let bearer = "";
            if (criado.id) { bearer = await autenticacao.gerarJWT(criado.id, '1d'); } else { bearer = ""; }

            res.status(200).json({

                date: new Date(),
                code: 200,
                message: criado,
                token: bearer

            });

        } catch (error) {
            res.status(500).json({

                date: new Date(),
                code: 500,
                message: error

            });

        }

    },


    editarUsuario: async (req, res) => {
        try {
            let { nome, sobrenome, telefone, datanasc } = req.body
            let atualizado = await usuariosRepo.Atualizar({
                nome,
                sobrenome,
                telefone,
                datanasc
            }, { where: { id: req.params.id } });

            if (atualizado[0] === 1) {

                res.status(200).json({

                    date: new Date(),
                    code: 200,
                    message: "Usuário editado com sucesso!"

                });
            } else if (atualizado[0] === 0) {
                res.status(200).json({

                    date: new Date(),
                    code: 200,
                    message: "Este usuário não existe ou não pode ser atualizado!"

                });
            } else {
                res.status(500).json({

                    date: new Date(),
                    code: 200,
                    message: atualizado

                });
            }
        } catch (error) {
            res.status(500).json({

                date: new Date(),
                code: 500,
                message: error

            });
        }

    },

    deletarUsuario: async (req, res) => {

        try {
            let deletado = await usuariosRepo.Deletar({ where: { id: req.params.id } });
            if (deletado) {
                if (deletado === 1) {

                    res.status(200).json({

                        date: new Date(),
                        code: 200,
                        message: "Usuário deletado com sucesso!"

                    });
                } else {
                    res.status(500).json({

                        date: new Date(),
                        code: 200,
                        message: deletado

                    });
                }
            } else {
                res.status(500).json({

                    date: new Date(),
                    code: 200,
                    message: "Usuario nao encontrado!"

                });
            }
        } catch (error) {
            res.status(500).json({

                date: new Date(),
                code: 500,
                message: error

            });
        }

    },

    autorizarUsuario: async (req, res) => {

        try {

            let { email, senha } = req.body;

            let localizado = await usuariosRepo.PesquisarEmail(email);


            if (localizado && bcrypt.compareSync(senha, localizado.dataValues.senha)) {


                let bearer = await autenticacao.gerarJWT(localizado.dataValues.id, '1d');
                res.status(200).send(

                    {
                        date: new Date(),
                        code: 200,
                        message: "Usuário: " + email + " logado com sucesso! ",
                        token: bearer
                    }

                );

            } else {
                res.status(200).send(
                    {
                        date: new Date(),
                        code: 200,
                        message: "Usuário ou senha inválidos"
                    }

                );
            }

        } catch (error) {
            res.status(500).send(
                {
                    date: new Date(),
                    code: 500,
                    message: error
                }

            );
        }
    }

}

module.exports = usuariosService;