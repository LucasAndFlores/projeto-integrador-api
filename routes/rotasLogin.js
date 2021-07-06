const express = require('express');
const router = express.Router();
const { check, validationResult, body } = require('express-validator');

const LoginController = require('../controllers/LoginController');

router.get('/recuperarsenha', (req, res) => {
    res.render('loginForgotPsw')
});

router.get('/', (req, res) => {
    res.render('/login')
});


const validateRegister = [
check('email')
    .notEmpty().withMessage("Você deve preencher o email").bail()
    .isEmail().withMessage("Você deve preencher um email válido"),

check('senha')
.notEmpty().withMessage("Você deve preencher a senha").bail()
.isLength({ min: 8 }).withMessage("A senha deve ter pelo menos 8 caracteres")

]

router.post('/', validateRegister, LoginController.autenticaUsuario);



module.exports = router;