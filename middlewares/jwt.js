const expressJwt = require('express-jwt');
const config = require('../config/config.json');


const jwt = () => {
    const { secret } = config;
    return expressJwt({ secret, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/v1/usuarios/autorizacao',
            '/v1/usuarios/'


        ]
    });
}
module.exports = jwt;