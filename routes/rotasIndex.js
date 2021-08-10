const express = require('express');
const router = express.Router();
const Usuarios = require('../models');
const IndexController = require('../controllers/IndexController');
const transacoesController = require('../controllers/transacoesController');
const cartoesController = require('../controllers/cartoesController')
const { salvarForm } = require('../controllers/IndexController');


router.get('/', IndexController.AcessoHome);
router.get('/cartoes',cartoesController.verCartoes);
router.get('/cadastro-cartoes', cartoesController.cadastrarCartao);
router.post('/cadastro-cartoes', cartoesController.guardarCartao);
router.get('/transacoes', transacoesController.verTransacoes);
router.post('/transacoes', transacoesController.CadastrarTransacaoSequelize);
router.get('/entradas', IndexController.verEntradas);
router.post('/entradas', IndexController.cadastrarEntradas);
router.get('/objetivos', IndexController.verObjetivos);
router.get('/configuracoes', IndexController.verConfiguracoes);
router.get('/index', IndexController.AcessoHome);
 

module.exports = router;