const express = require('express');
const router = express.Router();

const entradasController = require('../controllers/EntradasController');

router.get('/ver', entradasController.verEntradas);
router.post('/criar', entradasController.criarEntrada);
router.put('/editar/:id', entradasController.editarEntrada);
router.delete('/deletar/:id', entradasController.deletarEntrada);

module.exports = router;