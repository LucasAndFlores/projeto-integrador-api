const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt'); // cripto de senha

let usuarioJson = path.join("usuarios.json");

const CheckUserController =  (email, senha) => {
    let usuarios = []
    usuarios = JSON.parse(fs.readFileSync(usuarioJson));
    //console.log("Usuarios", usuarios);

    let found = false;

    usuarios.forEach(element => {
        console.log(JSON.parse(element).email);
        if (email === JSON.parse(element).email) { found = true; }

    });
    return found;

}


module.exports = CheckUserController;