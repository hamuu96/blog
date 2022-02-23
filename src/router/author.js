const express = require('express')
const router = express.Router()
const authorConroller = require('../controllers/authorContoller')


// author index page
router.get('/', authorConroller.author); 

// get author page 
router.get('/profile', authorConroller.profile); 

// is there a way to chain routes while using controller
// router.route('/public')
//     .get(authorConroller.public),
//     .post(authorConroller.blog);

// get author page 
router.get('/public', authorConroller.public); 
// get author page 
router.post('/public', authorConroller.postBlog); 
// get author page 
router.get('/member', authorConroller.member); 
// get author page 
router.get('/private', authorConroller.private); 
// get author page 
router.get('/view', authorConroller.view); 

module.exports = router;
