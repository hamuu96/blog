const express = require('express');
const router = express.Router();
// const bodyParser = require('body-parser');
const app = express();
const authController = require('../controllers/adminController');



router.get('/', (req, res ) => {
    res.render('admin/admin-index');
    console.log(req.url);
});



router.get('/login',authController.admin_login );

router.get('/login/auth',authController.login );





module.exports = router;

