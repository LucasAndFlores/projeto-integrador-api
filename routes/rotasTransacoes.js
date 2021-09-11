const express = require('express');
const router = express.Router();
const transacoesController = require('../controllers/TransacoesController');
const schema = require('../middlewares/schemasMid')
const middlewareTransacoes = require('../middlewares/transacoesMiddleware')


router.get('/', transacoesController.verTransacoes);
router.post('/', middlewareTransacoes(schema.transacoes),transacoesController.criarTransacao);
router.put('/:id', middlewareTransacoes(schema.transacoes),transacoesController.editarTransacao);
router.delete('/:id', transacoesController.deletarTransacao);


module.exports = router;