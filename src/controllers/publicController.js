const express = require('express')
const sql = require('../database/sql')
const sqlController = require('../controllers/sqlController')

const view_option = 'public'


exports.getBlogs = (req, res) =>{

const create_tables = require('../database/tables');
 sqlController.getPublicBlog(view_option, (result, err) => {
        if(err) throw err;
        console.log(result);
        res.render('user/index', {publicBlogs: result});
        
    })

    
}