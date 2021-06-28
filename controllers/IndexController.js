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
        res.render("objetivos_v1");
    },

    verConfiguracoes: (req, res) => {
        res.send("Ver configurações");
    },
}

module.exports = IndexController
