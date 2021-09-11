

const cartoesRepo = require('../repository/cartoesRepo');


const cartoesService = {

    verCartoes: async (req, res) => {
        try {
            let todosCartoes = await cartoesRepo.BuscarTodas();
            res.status(200).json({

                date: new Date(),
                code: 200,
                todosCartoes

            });
        } catch (error) {
            res.status(500).json({

                date: new Date(),
                code: 500,
                message: error

            });
        }
    },

    verCartao: async (req, res) => {
        try {
            let cartao = await cartoesRepo.Pesquisar(req.params.id);
            if (cartao) {
                res.status(200).json({

                    date: new Date(),
                    code: 200,
                    cartao

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

    criarCartao: async (req, res) => {

        try {

            let criado = await cartoesRepo.Criar(req.body);


            res.status(200).json({

                date: new Date(),
                code: 200,
                message: criado
            });

        } catch (error) {
            res.status(500).json({

                date: new Date(),
                code: 500,
                message: error

            });

        }

    },


    editarCartao: async (req, res) => {
        try {
            let atualizado = await cartoesRepo.Atualizar(req.body, { where: { id: req.params.id } });

            if (atualizado[0] === 1) {

                res.status(200).json({

                    date: new Date(),
                    code: 200,
                    message: "Cartão atualizado com sucesso!"

                });
            } else if (atualizado[0] === 0) {
                res.status(200).json({

                    date: new Date(),
                    code: 200,
                    message: "Este cartão não existe!"

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

    deletarCartao: async (req, res) => {

        try {
            let deletado = await cartoesRepo.Deletar({ where: { id: req.params.id } });
            if (deletado) {
                if (deletado === 1) {

                    res.status(200).json({

                        date: new Date(),
                        code: 200,
                        message: "Cartão deletado com sucesso!"

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
                    message: "Cartão nao encontrado!"

                });
            }
        } catch (error) {
            res.status(500).json({

                date: new Date(),
                code: 500,
                message: error

            });
        }

    }



}

module.exports = cartoesService;