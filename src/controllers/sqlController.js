const sql = require('../database/sql');
const db = require('../database/database');

const conn = db.conn;




function getAdminCreds(email,callback) {
    conn.query(sql.selectalladmin, [email], (err, result, fields) => {
       return callback(result);
    }) 

    
 }

function insertUsers(firstname, lastname, email, password, address,  author, dob, callback){

    // //convert string to bool
    // const auth = String(author); 
    /// how to insert bool value instead of stead of string ????

    conn.query(sql.insertUser, [firstname, lastname, email, password, address, author, dob], (err, result, fields) => {
        return callback(result, err);
    })
}

 module.exports = {
     getAdminCreds,
     insertUsers,
 }