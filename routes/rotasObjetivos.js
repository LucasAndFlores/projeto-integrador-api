const express = require('express');
const router = express.Router();
const objetivosController = require('../controllers/ObjetivosController');
const schema = require('../middlewares/schemasMiddleware')
const middlewareValidacao = require('../middlewares/middlewareValidacao')

router.get('/', objetivosController.verObjetivos);
router.get('/:id', objetivosController.buscarObjetivosUsuario);
router.post('/', middlewareValidacao(schema.objetivos), objetivosController.criarObjetivo);
router.put('/:id', middlewareValidacao(schema.objetivos), objetivosController.editarObjetivo);
router.delete('/:id', objetivosController.deletarObjetivo);

module.exports = router;