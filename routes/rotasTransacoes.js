const express = require('express');
const router = express.Router();
const transacoesController = require('../controllers/TransacoesController');

router.get('/ver', transacoesController.verTransacoes);
router.post('/criar', transacoesController.criarTransacao);
router.put('/editar/:id', transacoesController.editarTransacao);
router.delete('/deletar/:id', transacoesController.deletarTransacao);


module.exports = router;