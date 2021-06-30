const { check, validationResult, body } = require("express-validator");


const IndexController = {
    verCartoes: (req, res) => {
        res.send('Ver cartões');
    },

    verTransacoes: (req, res) => {
        res.send("Ver transações");
    },

    verEntradas: (req, res) => {
        res.send("Ver entradas");
    },

    verObjetivos: (req, res) => {
        res.send("Ver objetivos");
    },

    verConfiguracoes: (req, res) => {
        res.render('configuracoes');
    },
    cadastraUsuario: (req, res) => {
        console.log(validationResult(req));
        console.log(req.body, req.file);      
        
        let listaDeErrors = validationResult(req);

        if(listaDeErrors.isEmpty()) {
        const {filename} = req.file; 
        return res.render('index', { image: `/storage/${filename}` }); 
    }   
        else {
            return res.render('cadastro', {errors:listaDeErrors.errors})           
        }
    },
}

module.exports = IndexController
