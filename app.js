const express = require('express');
const mustache = require('mustache-express');
// Rotas
const router = require('./routes/index');
const helpers = require('./helpers');


// configurações
const app = express();

app.use((req, res, next)=>{
    res.locals.h = helpers;
    res.locals.teste = '123';
    next();
});

app.use(express.json());

app.use('/', router);

app.engine('mst', mustache(__dirname+'/views/portails', '.mst'));
app.set('view engine', 'mst');
app.set('views', __dirname + '/views');

module.exports = app;