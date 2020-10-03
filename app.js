const express = require('express');
const mongoose = require('mongoose');
const mustache = require('mustache-express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');

const router = require('./routes/index');
const helpers = require('./helpers');
const errorHendler = require('./handlers/errorHendler');


// configurações
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser(process.env.SECRET));
app.use(session({
    seecret:process.env.SECRET,
    resave:false,
    saveUninitialized:false
}));
app.use(flash());

app.use((req, res, next)=>{
    res.locals.h = helpers;
    res.locals.flashes = req.flash();
    next();
});

app.use('/', router);

app.use(errorHendler.notFound);

app.engine('mst', mustache(__dirname+'/views/portails', '.mst'));
app.set('view engine', 'mst');
app.set('views', __dirname + '/views');

module.exports = app;