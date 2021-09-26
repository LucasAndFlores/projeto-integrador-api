const express = require('express');
const router = express.Router();
const entradasController = require('../controllers/entradasController');
const schema = require('../middlewares/schemasMiddleware');
const middlewareValidacao = require('../middlewares/middlewareValidacao');

router.get('/', entradasController.verEntradas);
router.post('/', middlewareValidacao(schema.entradas), entradasController.criarEntrada);
router.put('/:id', middlewareValidacao(schema.entradas), entradasController.editarEntrada);
router.delete('/:id', entradasController.deletarEntrada);

module.exports = router;