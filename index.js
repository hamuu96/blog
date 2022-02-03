require('source-map-support').install()
const express = require('express');
const path = require('path');
const admin = require('./src/router/admin');


const app = express();

app.listen(8081);

// Static Middleware
app.use(express.static('static'))
// app.use('/img',express.static(path.join(__dirname, 'static/img')));
// app.use('/css',express.static(path.join(__dirname, 'static/css')));
  
// View Engine Setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');






app.use('/admin', admin);
app.get('/', (req, res) =>{
    res.render('index');
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
