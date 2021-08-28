const express = require('express');
const router = express.Router();
const cartoesController = require('../controllers/cartoesController');

router.get('/',cartoesController.verCartoes);
router.post('/', cartoesController.guardarCartao);
router.put('/:id', cartoesController.atualizarCartao)
router.delete('/:id', cartoesController.destruirCartao)


// router.get('/objetivos', objetivosController.verObjetivos);
// router.post('/objetivos', objetivosController.verObjetivos);
 

module.exports = router;