const express = require('express');
const router = express.Router();
const objetivosController = require('../controllers/ObjetivosController');

router.get('/', objetivosController.verObjetivos);
router.post('/', objetivosController.criarObjetivo);
router.put('/:id', objetivosController.editarObjetivo);
router.delete('/:id', objetivosController.deletarObjetivo);

module.exports = router;