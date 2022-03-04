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
const { nextTick } = require('process')

// get data from form and insert into database
function insertBlogContent (req, res ){
    const { heading, content, image, multimedia,view_option, userid} = req.body

    // // insert data into database about blog
    sqlController.insertBlog( heading, content, image, multimedia,view_option, userid, (result, err) => {
        if(err) throw err;
        res.redirect('/author') 
    })

}

function deleteBlog( req, res,blog_id){
   

}
function getBlogData( req, res,blog_id){
    //get all blogs
    sqlController.getSingleBlog(blog_id['id'],(result, err) => {
        if(err) throw err;
        //redirect to delete page once button is clicked
        res.render('author/edit', {option: result} )
    })
}
function editBlog( req, res,blog_id){
    const { heading, content, image, multimedia, view_option, userid } = req.body
    //get all blogs
    sqlController.editBlog(blog_id['id'], heading, content,view_option, userid,(result, err) => {
        if(err) throw err;
        //redirect to delete page once button is clicked
        res.render('author/edit', {option: view_option })
    
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
exports.view = (req, res) => {
      //get all blogs
      sqlController.getAllBlogs(1,(result, err) => {
        if(err) throw err;
        res.render('author/blogview', {blogs: result});
    })//change user id
    
}
exports.postBlog =  (req, res) => {
    //execution of function
    insertBlogContent(req, res)
}
exports.deleteBlog =  (req, res) => {
    //get all blogs
    sqlController.deleteBlog(req.params['id'],(result, err) => {
        if(err) throw err;
        //redirect to delete page once button is clicked
        res.render('author/blogview', {msg: `Blog with id: ${blog_id} has been deleted`}) // redirect to page
    })
}
exports.edit =  (req, res) => {
    
    getBlogData(req,res, req.params)
}
exports.editBlog =  (req, res) => {
    console.log(req.body);
    editBlog(req,res,req.params)
}