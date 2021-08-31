const express = require('express');
const app = express();
const port = 3030;
const models = require('./models');
const rotasCartoes = require('./routes/rotasCartoes');
const rotasCategorias = require('./routes/rotasCategorias');
const rotasEntradas = require('./routes/rotasEntradas');
const rotasObjetivos = require('./routes/rotasObjetivos');
const rotasTransacoes = require('./routes/rotasTransacoes');
const rotasUsuarios = require('./routes/rotasUsuarios');




// app.use(express.urlencoded({extended:false}));
app.use(express.json());



app.use('v1/cartoes', rotasCartoes);
app.use('v1/categorias', rotasCategorias);
app.use('/v1/entradas', rotasEntradas);
app.use('v1/objetivos', rotasObjetivos);
app.use('v1/transacoes', rotasTransacoes);
app.use('v1/usuarios', rotasUsuarios);

app.listen(port, () => {
    console.log('Server started on port: ' + port)
});

app.use((req, res) => {
    return res.status(404).render('notFound');
})

const connect = async () => {try {
    await models.sequelize.authenticate();
    console.log('Conexão estabelecida com o sequelize');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
} 
connect()

