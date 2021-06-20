const express = require('express');
const router = express.Router();
const multer = require('multer');
/* const storage = multer.memoryStorage(); */
/* const uploadFile = multer({ storage: storage }); */


const CadastroController = require('../controllers/CadastroController');

router.post('/', CadastroController.cadastraUsuario);

/* const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/avatars'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  });

  router.post('/register', uploadFile.single('avatar'), usersController.create); */




module.exports = router;