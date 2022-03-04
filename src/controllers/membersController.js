const express = require('express')
const sql = require('../database/sql')
const sqlController = require('./sqlController')

const view_option = 'member'

exports.getMemberBlogs = (req, res) =>{

    // get blog with view option public
    sqlController.getMemberBlog(view_option, (result, err) => {
        if(err) throw err;
        // console.log(result);
        res.render('user/main', {memberBlogs: result});
    })
}