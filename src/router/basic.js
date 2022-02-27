const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const publicController = require('../controllers/publicController')


//post request signup 
router.get('/', publicController.getBlogs);
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
    res.render('user/login');
//    res.json({msg: 'sucess'}) ;
});

//post request signup 
router.post('/login', userController.login)

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

// author section 
// get author page 






module.exports = router; 