const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/CategoriasController');

router.get('/ver', categoriaController.todasCategorias);
/* router.post('/criar', categoriaController.todasCategorias);
router.put('/editar', categoriaController.todasCategorias);
router.delete('/deletar', categoriaController.todasCategorias); */

module.exports = router;