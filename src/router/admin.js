const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();



router.get('/', (req, res, next) => {
    res.render('admin-login');
    console.log(req.url);
});


// router.get('/signup', (req, res, next) => {
//     res.render('admin-signup');
//     console.log(req.url);
// });
module.exports = router;

