const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'storage' });


const CadastroController = require('../controllers/CadastroController');

/* router.post('/upload', upload.single('image'), CadastroController.cadastraUsuario);  */

router.post('/', (req, res) => {
   res.render('cadastro')
});

module.exports = router;