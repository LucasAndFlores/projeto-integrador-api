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
        console.log(req.body, req.file);
        const {filename} = req.file; 
        res.render('index', { image: `/storage/${filename}` });        
    },
}

module.exports = IndexController
