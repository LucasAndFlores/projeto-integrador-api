const express = require('express');
const router = express.Router();
const cartoesController = require('../controllers/CartoesController');

router.get('/ver', cartoesController.verCartoes);
router.post('/criar', cartoesController.criarCartao);
router.put('/editar/:id', cartoesController.editarCartao);
router.delete('/deletar/:id', cartoesController.deletarCartao);

module.exports = router;