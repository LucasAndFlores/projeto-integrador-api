const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/UsuariosController');

router.get('/', usuariosController.verUsuarios);
router.post('/', usuariosController.cadastrarUsuario);
router.put('/:id', usuariosController.editarUsuario);
router.delete('/:id', usuariosController.deletarUsuario);

module.exports = router;