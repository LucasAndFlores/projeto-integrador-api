const expressJwt = require('express-jwt');
const config = require('../config/config.json');


const jwt = () => {
    const { secret } = config;
    return expressJwt({ secret, algorithms: ['HS256'] }).unless({
         // public routes that don't require authentication
        path: [
            { url: /^\/v1\/usuarios/, methods: ['POST'] },
            { url: /^\/v1\/usuarios\/autorizacao/, methods: ['POST'] },
              
        ]
    });
}
module.exports = jwt;