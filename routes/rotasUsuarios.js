const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const schema = require('../middlewares/schemasMiddleware');
const middlewareValidacao = require('../middlewares/middlewareValidacao');

router.get('/', usuariosController.verUsuarios);
router.get('/:id', usuariosController.verUsuario);
router.post('/', usuariosController.cadastrarUsuario);
router.put('/:id', middlewareValidacao(schema.usuarios), usuariosController.editarUsuario);
router.delete('/:id', usuariosController.deletarUsuario);
router.post('/autorizacao', usuariosController.autorizarUsuario);

module.exports = router;