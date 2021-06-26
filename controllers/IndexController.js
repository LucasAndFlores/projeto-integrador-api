const IndexController = {
    verCartoes: (req, res) => {
        res.render('cartoes')
        //res.send('Ver cartões');
    },
    guardarCartao: (req, res)=>{
        console.log(req.body);
        res.redirect('/index')
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
