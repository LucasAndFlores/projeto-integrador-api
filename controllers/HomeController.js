const HomeController = {
    acessoHome: (req, res) => {
        res.render('home');
    },

    verQuemSomos: (req, res) => {
        res.send("Quem somos");
    },

    verContato: (req, res) => {
        res.send("Contato");
    },

    verDepoimento: (req, res) => {
        res.send("Depoimentos");
    },
}

module.exports = HomeController;