const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

//post request signup 
router.get('/', (req, res) =>{

    //initialize database and create tables
    const create_tables = require('../database/tables');
    
    res.render('user/index');
    console.log(req.url);
});
//request to logged in users 
router.get('/main', (req, res) =>{
    res.render('user/main');
});
//post request signup 
router.get('/single', (req, res) =>{
    res.render('user/single');
});
//post request signup 
router.get('/login', (req, res) =>{
    // res.render('login');
   res.json({msg: 'sucess'}) ;
});


//post request signup 
router.get('/signup', (req, res) =>{
//    res.json({msg: 'signup'}) ;
    res.render('user/signup');
});
//post request signup 
router.post('/signup', userController.signup)

router.get('/post', (req, res) =>{
    res.render('user/post');
});

module.exports = router; 