const express = require('express');
const app = express();
const port = 3000;

const rotasIndex = require('./routes/rotasIndex');
const rotasHome = require('./routes/rotasHome');
const rotasLogin = require('./routes/rotasLogin');
const rotasCadastro = require('./routes/rotasCadastro');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/storage', express.static('storage'))
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/', rotasHome);
app.use('/login', rotasLogin);
app.use('/cadastro', rotasCadastro);
app.use('/index', rotasIndex);

app.use((req, res) => {
    return res.status(404).render('notFound');
})

app.listen(port, () => {
    console.log('Server started on port: ' + port)
});

