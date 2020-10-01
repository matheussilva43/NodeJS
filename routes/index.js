const express = require('express');

const router = express.Router();
router.get('/', (req, res)=>{
    // http://localhost:7777/?nome=SeuNome&idade=15&mostrar=true
    let obj = {
        'nome': req.query.nome,
        'idade': req.query.idade,
        'mostrar':req.query.mostrar,
        'ingredientes':[
            {nome:'Arroz', qt:'20g'},
            {nome:'Macarrão', qt:'100g'}
        ]
    };
    res.render('home', obj);
});

module.exports = router;