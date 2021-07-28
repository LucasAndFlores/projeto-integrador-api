const express = require('express');
const router = express.Router();

const CadastroController = require('../controllers/CadastroController');



router.get('/', (req, res) => {res.render('/')}/* CadastroController.acessoCadastro */);
router.post('/', CadastroController.cadastraUsuario);




module.exports = router;