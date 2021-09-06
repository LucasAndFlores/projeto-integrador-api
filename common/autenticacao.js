const jwt = require('jsonwebtoken');
const config = require('../config/config.json');


const autenticacao = {
    gerarJWT: async (userId, duracao) => {
        try {
            const token = jwt.sign({ sub: userId }, config.secret, { expiresIn: duracao });
            
            return token;
        }
        catch (error) {
            return error;
        }
    },

    checarSenha: async (senhaEntrada, senhaBanco) => {
        try {
            const token = jwt.sign({ sub: userId }, config.secret, { expiresIn: duracao });
            
            return token;
        }
        catch (error) {
            return error;
        }
    },


}

module.exports = autenticacao;