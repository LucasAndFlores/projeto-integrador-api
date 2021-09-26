const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/CategoriasController');
const schemas = require('../middlewares/schemasMiddleware');
const middlewareValidacao = require ('../middlewares/middlewareValidacao');

router.get('/', categoriaController.todasCategoria);
router.post('/', middlewareValidacao(schemas.categoria),categoriaController.cadastrarCategoria);
router.put('/:id',middlewareValidacao(schemas.categoria),categoriaController.atualizarCategoria);
router.delete('/:id', categoriaController.destruirCategoria); 

module.exports = router;