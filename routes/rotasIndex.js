const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'storage' });
const { check, validationResult, body } = require('express-validator');

const validateRegister = [ 
check('nome')
    .notEmpty().withMessage("Você deve preencher o nome").bail()
    .isLength({ min: 5 }).withMessage("O nome deve ter pelo menos 5 caracteres"),

check('sobrenome')
    .notEmpty().withMessage("Você deve preencher o sobrenome").bail()
    .isLength({ min: 5 }).withMessage("O sobrenome deve ter pelo menos 5 caracteres"),

check('email')
    .notEmpty().withMessage("Você deve preencher o email").bail()
    .isEmail().withMessage("Você deve preencher um email válido"),

check('celular')
    .notEmpty().withMessage("Você deve preencher o celular").bail()
    .isMobilePhone(['pt-BR']).withMessage("Você deve preencher um celular válido"),

check('dataNasc')
    .notEmpty().withMessage("Você deve preencher a data de nascimento").bail()
    .isDate().withMessage("Você deve preencher uma data válida"),
    /* .isAfter().withMessage("Você deve preencher uma nova data válida"), */

check('senha')
    .notEmpty().withMessage("Você deve preencher a senha").bail()
    .isLength({ min: 8 }).withMessage("A senha deve ter pelo menos 8 caracteres"),
/*     .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, 
        returnScore: true, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, 
        pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }), */

check('confirmasenha')
    .notEmpty().withMessage("Você deve preencher o confirmar a senha").bail()
    .isLength({ min: 8 }).withMessage("A senha deve ter pelo menos 8 caracteres")
/*     .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, 
        returnScore: true, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, 
        pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }), */

];

const IndexController = require('../controllers/IndexController');
const { salvarForm } = require('../controllers/IndexController');

router.get('/', IndexController.AcessoHome);

router.get('/cartoes', IndexController.verCartoes);
router.post('/cartoes', IndexController.guardarCartao);
router.get('/transacoes', IndexController.verTransacoes);
router.get('/entradas', IndexController.verEntradas);
router.get('/objetivos', IndexController.verObjetivos);
router.get('/configuracoes', IndexController.verConfiguracoes);
router.post('/', upload.single('image'), validateRegister, IndexController.cadastraUsuario, salvarForm); 

module.exports = router;