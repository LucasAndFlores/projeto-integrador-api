const { check, validationResult, body } = require("express-validator");
const fs = require('fs');
const path = require('path');

let usuarioJson = path.join("usuarios.json");

const IndexController = {
    AcessoHome: (req, res) => {
        res.render('index');
    },

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
        res.render('transacoes');
    },

    verEntradas: (req, res) => {
        res.send("Ver entradas");
    },

    verObjetivos: (req, res) => {
        res.render("objetivos_v1");
    },

    verConfiguracoes: (req, res) => {
        res.render('configuracoes');
    },

    cadastraUsuario: (req, res) => {
        console.log(validationResult(req));
        console.log(req.body, req.file);   
/*         let {nome, sobrenome, email, celular, dataNasc, senha, confirmasenha} = req.body;
        let usuario = JSON.stringify({nome, sobrenome, email, celular, dataNasc, senha, confirmasenha});

        fs.writeFileSync(usuarioJson, usuario, {encoding:'utf-8'});  */
        /* res.send("Usuário cadastrado")  */  
        
        let listaDeErrors = validationResult(req);

        if(listaDeErrors.isEmpty()) {
        const {filename} = req.file;

        return res.render('index', { image: `/storage/${filename}` }); 
    }   
        else {
            return res.render('cadastro', {errors:listaDeErrors.errors})           
        }
    },

    salvarForm: (req, res) => {
        let {nome, sobrenome, email, celular, dataNasc, senha, confirmasenha} = req.body;
        let usuario = JSON.stringify({nome, sobrenome, email, celular, dataNasc, senha, confirmasenha});

        fs.writeFileSync(usuarioJson, usuario, {encoding:'utf-8'});
    },

}

module.exports = IndexController
