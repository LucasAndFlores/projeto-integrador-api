const express = require('express');
const router = express.Router();

const entradasController = require('../controllers/entradasController');

router.get('/', entradasController.verEntradas);
router.post('/', entradasController.criarEntrada);
router.put('/:id', entradasController.editarEntrada);
router.delete('/:id', entradasController.deletarEntrada);

module.exports = router;