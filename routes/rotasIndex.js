const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'storage' });

const IndexController = require('../controllers/IndexController');

router.get('/cartoes', IndexController.verCartoes);
router.get('/transacoes', IndexController.verTransacoes);
router.get('/entradas', IndexController.verEntradas);
router.get('/objetivos', IndexController.verObjetivos);
router.get('/configuracoes', IndexController.verConfiguracoes);
router.post('/', upload.single('image'), IndexController.cadastraUsuario); 

module.exports = router;