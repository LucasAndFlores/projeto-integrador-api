const express = require('express');
const router = express.Router();
const transacoesController = require('../controllers/transacoesController');
const cartoesController = require('../controllers/cartoesController');
const categoriaController = require('../controllers/categoriasController');
const entradasController = require ('../controllers/entradasController')



router.get('/cartoes',cartoesController.verCartoes);
router.post('/cartoes', cartoesController.guardarCartao);
router.put('/cartoes/:id', cartoesController.atualizarCartao)
router.delete('/cartoes/:id', cartoesController.destruirCartao)
router.get('/transacoes', transacoesController.verTransacoes);
router.post('/transacoes', transacoesController.CadastrarTransacaoSequelize);
router.put('/transacoes/:id', transacoesController.atualizarTransacao)
router.delete('/transacoes/:id', transacoesController.destruirTransacao)
router.get('/entradas', entradasController.verEntradas);
router.post('/entradas', entradasController.cadastrarEntradas);
// router.get('/objetivos', objetivosController.verObjetivos);
// router.post('/objetivos', objetivosController.verObjetivos);
router.get('/categorias', categoriaController.todasCategorias )
 

module.exports = router;