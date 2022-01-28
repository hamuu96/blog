const db = require('./database');
const sql = require('./sql');

const conn = db.conn;

conn.query(sql.users, (err, result, fields) =>{
    if(err) throw err;
    console.log('table created users');
})

conn.query(sql.admin, (err, result, fields) =>{
    if(err) throw err;
    console.log('table created admin');
})

conn.query(sql.blog, (err, result, fields) =>{
    if(err) throw err;
    console.log('table created blog');
})

