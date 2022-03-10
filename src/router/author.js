const express = require('express')
const router = express.Router()
const authorConroller = require('../controllers/authorContoller')
const userController = require('../controllers/userController')

// author index page
router.get('/', authorConroller.author); 

// get author page 
router.get('/profile', authorConroller.profile); 
// get author page 
router.get('/public', authorConroller.public); 
// get author page 
router.post('/public', authorConroller.postBlog); 
// get author page 
router.get('/member', authorConroller.member); 
// get author page 
router.post('/member', authorConroller.postBlog); 
// get author page 
router.get('/private', authorConroller.private); 
// get author page 
router.post('/private', authorConroller.postBlog); 
// get author page 
router.get('/view', authorConroller.view); 
// get author page 
router.get('/view/delete/:id', authorConroller.deleteBlog); 
// get author page 
router.get('/edit/:id', authorConroller.edit); 
// get author page 
router.post('/edit/:id', authorConroller.editBlog); 

// get author page 
router.get('/logout', authorConroller.logout); 
module.exports = router;
