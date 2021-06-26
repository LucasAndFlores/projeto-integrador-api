const express = require('express');
const router = express.Router();

const IndexController = require('../controllers/IndexController');

router.get('/cartoes', IndexController.verCartoes);
router.post('/cartoes', IndexController.guardarCartao);
router.get('/transacoes', IndexController.verTransacoes);
router.get('/entradas', IndexController.verEntradas);
router.get('/objetivos', IndexController.verObjetivos);
router.get('/configuracoes', IndexController.verConfiguracoes);

module.exports = router;