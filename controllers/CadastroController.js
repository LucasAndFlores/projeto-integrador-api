const CadastroController = {
    cadastraUsuario: (req, res) => {
        console.log(req.body);
        res.redirect('/index');
    },
    acessoCadastro: (req,res) => {
        res.render('cadastro')
    }
}

module.exports = CadastroController;