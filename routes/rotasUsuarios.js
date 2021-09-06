const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController');

router.get('/', usuariosController.verUsuarios);
router.post('/', usuariosController.cadastrarUsuario);
router.put('/:id', usuariosController.editarUsuario);
router.delete('/:id', usuariosController.deletarUsuario);
router.post('/autorizacao', usuariosController.autorizarUsuario);

module.exports = router;