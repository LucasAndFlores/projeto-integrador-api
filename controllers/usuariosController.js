const router = require("../routes/rotasIndex");
const models = require('../models')


const usuariosController = {

    verConfiguracoes: async (req, res) => {     
        try{               
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
            let mostrandoUsuario = await models.usuarios.findByPk(id)

            res.status(200).json(mostrandoUsuario)
            
        } catch (error) {
            res.status(404) 
            console.log(error)
        }    
            
    },

}

module.exports = usuariosController