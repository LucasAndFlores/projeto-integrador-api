const router = require("../routes/rotasIndex");
const models = require('../models')


const usuariosController = {

    verConfiguracoes: async (req, res) => {     
    try{   
        /* let { id } = req.session.usuario */
        let usuario = await models.usuarios.findAll({
        })
        res.status(200).json(usuario);
    } catch (error) {
        res.status(404) 
        console.log(error)
    }
    },

    editarUsuarios: async (req, res) => {
    try{
        const { id } = req.params            
        const { nome, sobrenome, telefone } = req.body;            
        let usuario = await models.usuarios.update({ 
            nome, 
            sobrenome, 
            telefone 
        },
        {
            where: {
                id
            }
        });                    
        /* req.session.save(() => {
            res.redirect(`/index/configuracoes`) */
            res.status(200).json(usuario)
        /* }) */
    } catch (error) {
        res.status(404) 
        console.log(error)
    }    
        
    },

}

module.exports = usuariosController