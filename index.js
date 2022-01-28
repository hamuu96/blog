const express = require('express');
const path = require('path');
const admin = require('./src/router/admin');


const app = express();

app.listen(8081);


app.use( express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

// app.use(express.static('views'), 'ejs');
app.use('/img',express.static(path.join(__dirname, 'views/img')));
app.use('/js',express.static(path.join(__dirname, 'views/js')));
app.use('/css',express.static(path.join(__dirname, 'views/css')));
app.use('/fonts',express.static(path.join(__dirname, 'views/fonts')));
app.use('/icons-reference',express.static(path.join(__dirname, 'views/icons-reference')));
app.use('/vendor',express.static(path.join(__dirname, 'views/vendor')));


app.use('/admin', admin);
app.get('/', (req, res) =>{
    res.render('index');
});
app.get('/blog', (req, res) =>{
    res.render('blog');
});
app.get('/login', (req, res) =>{
    res.render('login');
});
app.get('/post', (req, res) =>{
    res.render('post');
});
