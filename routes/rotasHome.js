const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/HomeController');

router.get('/quemsomos', HomeController.verQuemSomos);
router.get('/contato', HomeController.verContato);
router.get('/depoimentos', HomeController.verDepoimento);

module.exports = router;