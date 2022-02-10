const mysql = require('mysql');
const database = 'M00794993Hamza';

// const config = {
//     host: 'localhost',
//     user: 'M00794993Hamza',
//     password: '1234' ,
//     database: database
// }
const config = {
    host: 'localhost',
    user: 'root',
    password: '' ,
    database: database
}
async function test_conn(database = null) {

    // const initial_conn = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'M00794993Hamza',
    //     password: '1234' 
       
    // });

    const initial_conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '' 
       
    });
    //connect to database
    initial_conn.connect((err) => {
        if (err)
            throw err;
        console.log('testing connected to database');
    });
    const db = `Create database if not exists ${database}`;
    initial_conn.query(db, (err, result, fields) => {
        if (err)
            throw err;
        console.log('Database created');
    })
    return true;
}

const test = test_conn(database);


if (test ){ // error when using config as the configuration
    // const connection = mysql.createConnection(
    //     {
    //         host: 'localhost',
    //         user: 'M00794993Hamza',
    //         password: '1234' ,
    //         database: database
    //     }

    const connection = mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: '' ,
            database: database
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
