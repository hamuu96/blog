const sql = require('../database/sql');
const db = require('../database/database');

const conn = db.conn;

function getAdminCreds(email,callback) {
    conn.query(sql.selectalladmin, [email], (err, result, fields) => {
       return callback(result);
    }) 

    
 }

function getUser(email, callback){
    conn.query(sql.selectUser, [email], (err, result, fields) =>{
        return callback(result, err);
    })
}

function insertUsers(firstname, lastname, email, password, address,  author, dob, callback){

    // //convert string to bool
    // const auth = String(author); 
    /// how to insert bool value instead of stead of string ???? in authors table

    conn.query(sql.insertUser, [firstname, lastname, email, password, address, author, dob], (err, result, fields) => {
        return callback(result, err);
    })
}


function insertBlog(heading, content, image, multimedia,view_option, userid, callback){

    //insert blog 
    conn.query(sql.insertBlog, [heading, content, image, multimedia,view_option, userid], (err, result, fields) => {
        //return results
        return callback(result, err);
    })

}

function getPublicBlog(view_options, callback){

    //insert blog 
    conn.query(sql.selectBlog, [view_options] ,(err, result, fields) => {
        //return results
        return callback(result, err);
        
    })
}
function getSingleBlog(blogId, callback){

    //insert blog 
    conn.query(sql.selectSingleBlog, [blogId] ,(err, result, fields) => {
        //return results
        return callback(result, err);
        
    })
}
function getMemberBlog(view_options, callback){

    //insert blog 
    conn.query(sql.selectBlog, [view_options] ,(err, result, fields) => {
        //return results
        return callback(result, err);
        
    })
}
function getAllBlogs(userid, callback){
    conn.query(sql.getAllBlogs, [userid], (err, result, fields) =>{
        return callback(result, err);
    })
}
function deleteBlog(blog_id, callback){
    conn.query(sql.deleteBlogPost, [blog_id], (err, result, fields) =>{
        return callback(result, err);
    })
}
function editBlog(blog_id, heading, content, image, multimedia,view_option, userid, callback){

    //insert blog 
    conn.query(sql.updateBlogPost, [blog_id, heading, content,view_option, userid], (err, result, fields) => {
        //return results
        return callback(result, err);
    })

}
// function gBlog(blog_id, callback){
//     conn.query(sql.deleteBlogPost, [blog_id], (err, result, fields) =>{
//         return callback(result, err);
//     })
// }
module.exports = {
    getAdminCreds,
    insertUsers,
    getUser,
    insertBlog,
    getPublicBlog, 
    getSingleBlog,
    getMemberBlog,
    getAllBlogs,
    deleteBlog,
    editBlog
 
 }
