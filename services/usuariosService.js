
const bcrypt = require('bcrypt');
const usuariosRepo = require('../repository/usuariosRepo');
const autenticacao = require('../common/autenticacao');

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
            let bodyCopy = req.body;
            bodyCopy.senha = bcrypt.hashSync(req.body.senha, 10);

            let inserido = await usuariosRepo.Criar(bodyCopy);

            let bearer = "";
            if (inserido.id) { bearer = await autenticacao.gerarJWT(inserido.id, '1d'); } else { bearer = ""; }

            res.status(200).json({

                date: new Date(),
                code: 200,
                message: inserido,
                token: bearer

            });

        } catch (error) {
            res.status(500).send(error);

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

            let localizado = await usuariosRepo.PesquisarEmail(email);

  
            if ( localizado && bcrypt.compareSync(senha, localizado.dataValues.senha)) {

     
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