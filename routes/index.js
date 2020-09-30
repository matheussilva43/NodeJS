const express = require('express');

const router = express.Router();
router.get('/', (req, res)=>{
    let obj = {
        'nome': 'Matheus',
        'idade': 50
    };
    res.render('home', obj);
});

module.exports = router;