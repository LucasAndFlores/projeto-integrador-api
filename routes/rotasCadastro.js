const express = require('express');
const router = express.Router();

const CadastroController = require('../controllers/CadastroController');

router.post('/', (req, res) => {
   res.render('cadastro');
});



module.exports = router;