const IndexController = {
    AcessoHome: (req, res) => {
        res.render('index');
    },

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
        res.send("Ver configurações");
    },
}

module.exports = IndexController
