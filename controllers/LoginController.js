const LoginController = {
    acessoLogin: (req, res) => {
        res.render('login');
    },

    verRecuperarSenha: (req, res) => {
        return res.render('loginForgotPsw');
    },

    autenticaUsuario: (req, res) => {
        /* if (inputemail.value == "caique.bezerra@gmail.com" && inputsenha.value == "1234") {
            alert("Acesso permitido");
    
          } else {
    
            alert("Acesso negado");
    
          }

           let { email, senha } = req.body  */
        res.redirect('/index');
        console.log(req.body);
    },

}

module.exports = LoginController;

