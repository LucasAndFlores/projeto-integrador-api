const express = require('express');
const router = express.Router();

const CadastroController = require('../controllers/CadastroController');

router.post('/', CadastroController.cadastraUsuario);


module.exports = router;