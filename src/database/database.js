const mysql = require('mysql');

const config = {
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE 
}
async function test_conn() {

    const initial_conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
       
    });

    //connect to database
    initial_conn.connect((err) => {
        if (err)
            throw err;
        console.log('testing connected to database');
    });
    const db = `Create database if not exists ${process.env.DATABASE}`;
    initial_conn.query(db, (err, result, fields) => {
        if (err)
            throw err;
        console.log('Database created');
    })
    return true;
}

const test = test_conn();


if (test ){ // error when using config as the configuration
    const connection = mysql.createConnection(
        {
            host: process.env.HOST,
            user: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: process.env.DATABASE ,
            socketPath: '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock',
            // port: '8889'


        }

    )
    connection.connect((err) => {
        if (err)
            throw err;
        console.log('connected to database');
    });
}

module.exports = {
    conn: mysql.createConnection(config)
}
