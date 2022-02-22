const express = require('express')
const router = express.Router()
const authorConroller = require('../controllers/authorContoller')


// author index page
router.get('/', authorConroller.author); 

// get author page 
router.get('/profile', authorConroller.profile); 



module.exports = router;
