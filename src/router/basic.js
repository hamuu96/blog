const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const publicController = require('../controllers/publicController')
const memberController = require('../controllers/membersController')

//post request signup 
router.get('/', publicController.getBlogs);
//request to logged in users 
router.get('/main', memberController.getMemberBlogs);
//post request signup 
router.get('/single/:id',publicController.displaySingleBlog );
//post request signup 
router.get('/login', publicController.getlogin);
//post request signup 
router.post('/login', userController.login);
//post request signup 
router.get('/signup', publicController.getsignup); 
//post request signup 
router.post('/signup', userController.signup)

module.exports = router; 