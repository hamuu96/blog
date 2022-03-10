const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser')
const app = express();
const authController = require('../controllers/adminController');
var cookie = require("cookie-parser");

app.use(cookie());

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// root path to admin page
router.get('/', authController.admin_root);


//route and controller to login page of admin
router.get('/login',authController.admin_login );
// auth section of admin page
router.post('/login',urlencodedParser,authController.login_auth );


//route and controller to login page of admin
router.get('/logout',authController.logout );


module.exports = router;

