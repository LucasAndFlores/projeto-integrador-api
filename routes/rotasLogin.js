const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/LoginController');

router.get('/recuperarsenha', (req, res) => {
    res.render('loginForgotPsw')
});

router.post('/', LoginController.autenticaUsuario);


module.exports = router;