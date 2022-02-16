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
router.get('/login/auth',urlencodedParser,authController.login );





module.exports = router;

