const express = require('express');
const router = express.Router();
const cartoesController = require('../controllers/CartoesController');
const schema = require('../middlewares/schemasMiddleware');
const middlewareValidacao = require('../middlewares/middlewareValidacao');

router.get('/', cartoesController.verCartoes);
router.get('/:id', cartoesController.verCartoesUsuario);
router.post('/', middlewareValidacao(schema.cartoes), cartoesController.criarCartao);
router.put('/:id', middlewareValidacao(schema.cartoes), cartoesController.editarCartao)
router.delete('/:id', cartoesController.deletarCartao)


 

module.exports = router;