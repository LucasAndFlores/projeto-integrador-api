const express = require('express');
const router = express.Router();

const CadastroController = require('../controllers/CadastroController');



router.get('/'/* , CadastroController.acessoCadastro */);
router.post('/', CadastroController.cadastraUsuario);




module.exports = router;