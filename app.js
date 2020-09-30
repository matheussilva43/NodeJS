const express = require('express');
// Rotas
const router = require('./routes/index');


// configurações
const app = express();
app.use('/', router);

module.exports = app;