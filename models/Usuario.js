module.exports = (sequelize, DataTypes) => {
        const Usuario = sequelize.define('Usuario', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true, 
            primaryKey: true,
        }, 
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sobrenome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        celular: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        data_de_nascimento: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        senha: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },{
        tableName: 'usuario',
        timestamps: false
    })

        return Usuario
}