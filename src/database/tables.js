const db = require('./database');
const sql = require('./sql');

const conn = db.conn;

// create user table
conn.query(sql.users, (err, result, fields) =>{
    if(err) throw err;
    console.log('table created users');
})

// create admin table
conn.query(sql.admin, (err, result, fields) =>{
    if(err) throw err;
    console.log('table created admin');
})
// create blog table
conn.query(sql.blog, (err, result, fields) =>{
    if(err) throw err;
    console.log('table created blog');
})


