
const express = require('express');
const path = require('path');
const admin = require('./src/router/admin');



const app = express();

app.listen(8081);

// serving of static files middleware
app.use(express.static('static'));
app.use('/style', express.static(__dirname + 'static/style'))
app.use('/img', express.static(__dirname + 'static/img'))
// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
// templating engine 
app.set('view engine', 'ejs');






app.use('/admin', admin);
app.get('/', (req, res) =>{

    //initialize database and create tables
    const create_tables = require('./src/database/tables');
    res.render('index');
    console.log(req.url);
});
app.get('/single', (req, res) =>{
    res.render('single');
});
app.get('/login', (req, res) =>{
    res.render('login');
});
app.get('/post', (req, res) =>{
    res.render('post');
});
