const express = require('express');
const router = express.Router();
const objetivosController = require('../controllers/ObjetivosController');

router.get('/ver', objetivosController.verObjetivos);
router.post('/criar', objetivosController.criarObjetivo);
router.put('/editar/:id', objetivosController.editarObjetivo);
router.delete('/deletar/:id', objetivosController.deletarObjetivo);

module.exports = router;