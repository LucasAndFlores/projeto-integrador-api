const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/UsuariosController');

router.get('/ver', usuariosController.verUsuarios);
router.post('/criar', usuariosController.cadastrarUsuario);
router.put('/editar/:id', usuariosController.editarUsuario);
router.delete('/deletar/:id', usuariosController.deletarUsuario);

module.exports = router;