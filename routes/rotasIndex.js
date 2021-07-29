const express = require('express');
const router = express.Router();



const Usuarios = require('../models');



const IndexController = require('../controllers/IndexController');


router.get('/', IndexController.AcessoHome);

router.get('/cartoes', IndexController.verCartoes);
router.get('/cadastro-cartoes',IndexController.cadastraCartoes);
router.post('/cadastro-cartoes', IndexController.guardarCartao);
router.get('/transacoes', IndexController.verTransacoes);
router.post('/transacoes', IndexController.CadastrarTransacaoSequelize);
router.get('/entradas', IndexController.verEntradas);
router.get('/objetivos', IndexController.verObjetivos);
router.get('/configuracoes', IndexController.verConfiguracoes);
 

module.exports = router;