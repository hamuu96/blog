const dotenv = require('dotenv').config()
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const admin = require('./src/router/admin');
const basic = require('./src/router/basic');

const app = express();

app.listen(process.env.PORT, () => {console.log(`server has started on port ${process.env.PORT}`);});
// serving of static files middleware
app.use(express.static('static'));
app.use('/style', express.static(__dirname + 'static/style'))
app.use('/img', express.static(__dirname + 'static/img'))
// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
// templating engine 
app.set('view engine', 'ejs');


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/', basic);
app.use('/admin', admin);
