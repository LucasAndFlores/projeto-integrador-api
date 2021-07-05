const IndexController = {
    verCartoes: (req, res) => {
        //let dadosCartao= {
            //limite: req.body.limite,
            //numero: req.body.cartaoDigitos,
            //bandeira: req.body.cartaoNome,
            //pagamento: req.body.dataPagamento,
            //tipo: req.body.tipoCartao
        //}
        res.render('cartoes')
        
    },
    cadastraCartoes: (req, res) =>{
        res.render('cadastroCartoes')
    },
    guardarCartao: (req, res)=>{
        console.log(req.body);
        res.redirect('/index/cartoes')
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
