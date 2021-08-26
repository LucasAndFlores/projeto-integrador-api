const express = require('express');
const app = express();
const port = 3030;
const models = require('./models');
const rotasIndex = require('./routes/rotasIndex');



app.use(express.static('public'));
app.use('/storage', express.static('storage'))
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/index', rotasIndex);

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

