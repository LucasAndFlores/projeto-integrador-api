const express = require('express');
const app = express();
const port = 8080;
const session = require('express-session');
const models = require('./models');



const rotasIndex = require('./routes/rotasIndex');
const rotasHome = require('./routes/rotasHome');
const rotasLogin = require('./routes/rotasLogin');
const rotasCadastro = require('./routes/rotasCadastro');
const { Session } = require('express-session');

app.use(session({
    secret:"projeto-economize-mais",
    resave: true,
    saveUninitialized: true

}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/storage', express.static('storage'))
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/', rotasHome);
app.use('/login', rotasLogin);
app.use('/cadastro', rotasCadastro);
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

