const CadastroController = {
    cadastraUsuario: (req, res) => {
        console.log(req.body);
        res.redirect('/index');
    },
}

module.exports = CadastroController;