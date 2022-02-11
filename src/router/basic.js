const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{

    //initialize database and create tables
    const create_tables = require('../database/tables');
    
    res.render('index');
    console.log(req.url);
});
router.get('/single', (req, res) =>{
    res.render('single');
});
router.get('/login', (req, res) =>{
    res.render('login');
});
router.get('/post', (req, res) =>{
    res.render('post');
});

module.exports = router; 