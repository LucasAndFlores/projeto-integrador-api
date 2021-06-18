const express = require('express');
const app = express();
const port = 3000;

const rotasIndex = require('./routes/rotasIndex');
const rotasHome = require('./routes/rotasHome');
const rotasLogin = require('./routes/rotasLogin');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {res.render ('home');});
app.get('/login/', (req, res) => {res.render ('login');});
app.get('/recuperarsenha', (req, res) => {res.render ('loginForgotPsw');})
app.get('/cadastro/', (req, res) => {res.render ('cadastro');});
app.get('/apphome/', (req, res) => {res.render ('appHome');});

app.use('/index', rotasIndex);
app.use('/', rotasHome);
app.use('/login', rotasLogin);

app.listen(port, () => {
    console.log("Server started on port ${port}...")
})