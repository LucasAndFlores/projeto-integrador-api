const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/CategoriasController');
const schemas = require('../middlewares/schemasMid')
const categoriaMiddleware = require('../middlewares/categoriaMiddleware')

router.get('/', categoriaController.todasCategoria);
router.post('/', categoriaMiddleware(schemas.categoria),categoriaController.cadastrarCategoria);
router.put('/:id',categoriaMiddleware(schemas.categoria),categoriaController.atualizarCategoria);
router.delete('/:id', categoriaController.destruirCategoria); 

module.exports = router;