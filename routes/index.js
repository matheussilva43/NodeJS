const express = require('express');

const router = express.Router();
router.get('/', (req, res)=>{
    // params via get
    // passe na url: http://localhost:7777/?nome=Fulano&sobrenome=Silva
    let nome      = req.query.nome;
    let sobrenome = req.query.sobrenome;

    // res.json({
    //     nomeCompleto: nome+' '+sobrenome
    // });

    // ou
    res.json(req.query);

    //res.send('Olá, '+nome+', você tem '+idade+' anos');
});

router.get('/posts/:slug', (req, res)=>{
    let slug = req.params.slug;
    // Titulo: seja bem vido
    // Slug: seja-bem-vindo
    res.send('Slug do post: '+slug);
});

router.get('/sobre', (req, res)=>{
    res.send('Página Sobre');
});

module.exports = router;