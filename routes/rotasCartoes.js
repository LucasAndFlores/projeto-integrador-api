const express = require('express');
const router = express.Router();
const cartoesController = require('../controllers/CartoesController')

router.get('/',cartoesController.verCartoes);
router.post('/', cartoesController.criarCartao);
router.put('/:id', cartoesController.editarCartao)
router.delete('/:id', cartoesController.deletarCartao)


 

module.exports = router;