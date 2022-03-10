const dotenv = require('dotenv').config()
const express = require('express');
const http = require('http')
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const morgan = require('morgan')
const csp = require('helmet-csp')
const helmet = require('helmet')
var bodyParser = require('body-parser');
const admin = require('./src/router/admin');
const basic = require('./src/router/basic');
const author = require('./src/router/author');
var MySQLStore = require('express-mysql-session')(session);
var mysql = require('mysql');

// using msql session store
// var options = {
//   host: process.env.HOST,
//   port: 3306,
//   user: process.env.USERNAME,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE
// };

// var connection = mysql.createConnection(options); // or mysql.createPool(options);
// var sessionStore = new MySQLStore({}/* session store options */, connection);


const app = express();

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: (30 * 24 * 60 * 60 * 1000 )}
}))



// setting up port on app 
let port = process.env.PORT || 8082

app.listen(port, () => {console.log(`server has started on port ${process.env.PORT}`);});

// serving of static files middleware
app.use(express.static('static'));
app.use('/style', express.static(__dirname + 'static/style'))
app.use('/img', express.static(__dirname + 'static/img'))
// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
// templating engine 
app.set('view engine', 'ejs');

// convert data into json format
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//write logs to a file
var logs = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// morgan middleware provides log 
app.use(morgan('common', {stream: logs})) // --> write logs to a file 

app.use(helmet())
app.use(helmet.hsts()); // default configuration
app.use(helmet.hsts({maxAge: 12345, includeSubDomains: false}));
// app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy()); //hide powered by
// app.use(helmet.noCache())


// Routes 
app.use('/', basic);
app.use('/admin',admin );
app.use('/author', author );

