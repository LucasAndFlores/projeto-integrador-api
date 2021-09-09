const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/CategoriasController');

router.get('/', categoriaController.todasCategoria);
router.post('/', categoriaController.cadastrarCategoria);
router.put('/:id', categoriaController.atualizarCategoria);
router.delete('/:id', categoriaController.destruirCategoria); 

module.exports = router;