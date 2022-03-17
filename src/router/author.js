const express = require('express')
const router = express.Router()
const authorConroller = require('../controllers/authorContoller')
const userController = require('../controllers/authController')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './static/img')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
const upload = multer({storage: storage})

// author index page
router.get('/', authorConroller.author); 

// get author page 
router.get('/profile', authorConroller.profile); 
// get author page 
router.get('/public', authorConroller.public); 
// get author page 
router.post('/public',upload.single('image'), authorConroller.postBlog); 
// get author page 
router.get('/member', authorConroller.member); 
// get author page 
router.post('/member', upload.single('image'),authorConroller.postBlog); 
// get author page 
router.get('/private', authorConroller.private); 
// get author page 
router.post('/private',upload.single('image'), authorConroller.postBlog); 
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
