const express = require('express');
const router = express.Router();
const transacoesController = require('../controllers/transacoesController');
const cartoesController = require('../controllers/cartoesController');
const categoriaController = require('../controllers/categoriasController');
const entradasController = require('../controllers/entradasController');
/* const usuariosController = require('../controllers/usuariosController'); */
const IndexController = require('../controllers/IndexController');



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
router.get('/configuracoes', IndexController.verConfiguracoes);
router.put('/usuarios/:id', IndexController.editarUsuarios);
 

module.exports = router;