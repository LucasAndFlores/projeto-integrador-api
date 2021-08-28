const express = require('express');
const app = express();
const port = 3000;
const models = require('./models');
const rotasIndex = require('./routes/rotasIndex');
const rotasCartoes = require('./routes/rotasCartoes')

app.use(express.static('public'));
app.use('/storage', express.static('storage'))
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/v1', rotasIndex);
app.use('/v1/cartoes', rotasCartoes);

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

