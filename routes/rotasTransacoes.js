const express = require('express');
const router = express.Router();
const transacoesController = require('../controllers/TransacoesController');

router.get('/', transacoesController.verTransacoes);
router.post('/', transacoesController.criarTransacao);
router.put('/:id', transacoesController.editarTransacao);
router.delete('/:id', transacoesController.deletarTransacao);


module.exports = router;