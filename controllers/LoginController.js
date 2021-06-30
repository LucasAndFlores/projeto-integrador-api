const { check, validationResult, body } = require("express-validator")

const LoginController = {
    verRecuperarSenha: (req, res) => {
        return res.render('loginForgotPsw');
    },

    autenticaUsuario: (req, res) => {
        console.log(validationResult(req));
        console.log(req.body, req.file);      
        /* res.redirect('/index'); */
                
        let listaDeErrors = validationResult(req);

        if(listaDeErrors.isEmpty()) {
        const {filename} = req.file; 
        return res.render('index'/* , { image: `/storage/${filename}` } */); 
    }   
        else {
            return res.render('login', {errors:listaDeErrors.errors})           
        }
        
    },

}

module.exports = LoginController;

