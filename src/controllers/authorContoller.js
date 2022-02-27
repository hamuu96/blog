const express = require('express')
const fs = require('fs')
const sqlController = require('./sqlController')
const cookie = require('cookie-parser')
const bcrypt = require('bcrypt')
const readline = require('readline')
const multer = require('multer')
const escape = require('escape-html');
const { builtinModules } = require('module')
const sql = require('../database/sql')

// get data from form and insert into database
function insertBlogContent (req, res, upload){
    const { heading, content, image, multimedia,view_option, userid} = req.body
    //print form data

    // // insert data into database about blog
    sqlController.insertBlog( heading, content, image, multimedia,view_option, userid, (result, err) => {
        if(err) throw err;
        res.redirect('/author') 
    })

}
exports.author = (req, res) => {
    res.render('author/author-index');
}

exports.profile = (req, res) => {
    res.render('author/author-profile');
}


exports.public = (req, res) => {

    res.render('author/create', {option: 'public'});
}
exports.private = (req, res) => {
    res.render('author/create', {option: 'priavte'});
}

exports.member = (req, res) => {
    res.render('author/create', {option: 'member'});
}

exports.view= (req, res) => {
    res.render('author/author-profile');
}

exports.postBlog =  (req, res) => {
    //execution of function
    insertBlogContent(req, res)
}
// exports.postBlog = (req, res,upload) => {
//     //execution of function
//     insertBlogContent(req, res, upload)
// }