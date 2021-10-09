const express = require('express');
const router = express.Router();
const objetivosController = require('../controllers/ObjetivosController');

router.get('/', objetivosController.verObjetivos);
<<<<<<< Updated upstream
router.post('/', objetivosController.criarObjetivo);
router.put('/:id', objetivosController.editarObjetivo);
=======
router.get('/:id', objetivosController.buscarObjetivosUsuario);
router.post('/', middlewareValidacao(schema.objetivos), objetivosController.criarObjetivo);
router.put('/:id', middlewareValidacao(schema.objetivos), objetivosController.editarObjetivo);
>>>>>>> Stashed changes
router.delete('/:id', objetivosController.deletarObjetivo);

module.exports = router;