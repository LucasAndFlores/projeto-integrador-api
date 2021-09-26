const express = require('express');
const router = express.Router();
const transacoesController = require('../controllers/TransacoesController');
const schema = require('../middlewares/schemasMiddleware');
const middlewareValidacao = require('../middlewares/middlewareValidacao');

router.get('/', transacoesController.verTransacoes);
router.post('/', middlewareValidacao(schema.transacoes), transacoesController.criarTransacao);
router.put('/:id', middlewareValidacao(schema.transacoes), transacoesController.editarTransacao);
router.delete('/:id', transacoesController.deletarTransacao);


module.exports = router;