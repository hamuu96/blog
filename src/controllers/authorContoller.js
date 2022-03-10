const express = require('express')
const fs = require('fs')
const sqlController = require('./sqlController')
const cookie = require('cookie-parser')
const bcrypt = require('bcrypt')
const readline = require('readline')
const multer = require('multer')
const escape = require('escape-html');
const sql = require('../database/sql')
const userController = require('./userController')


// get data from form and insert into database

function insertBlogContent (req, res ){
    const { heading, content, image, multimedia,view_option} = req.body
    if(image == '' & multimedia == ''){
        res.send('Please enter an image and multimedia!').end()
    }else{
        sqlController.insertBlog( heading, content, image, multimedia,view_option, req.session.authorUserid, (result, err) => {
        if(err) throw err;
        
        res.redirect('/author') 
    })
}
        
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
    const { heading, content, view_option} = req.body
    //get all blogs
    sqlController.editBlog( heading, content,view_option, req.session.authorUserid,blog_id['id'],(result, err) => {
        if(err) throw err;
        //redirect to delete page once button is clicked
        res.redirect('/author/view')
        // res.render('author/edit', {option: view_option })
    
    })
}

exports.author = (req, res) => {
   if(req.session.authorUserid){
        res.render('author/author-index', {msg: '', username: req.session.authorUsername});
   }else{
       res.redirect('/login')
   }
}

exports.profile = (req, res) => {
   if(req.session.authorUserid){
        res.render('author/author-profile');
    }else{
        res.redirect('/login')
    }
}
exports.public = (req, res) => {

   if(req.session.authorUserid){
    res.render('author/create', {option: 'Public', username: req.session.authorUsername});
    }else{
        res.redirect('/login')
    }
}
exports.private = (req, res) => {

   if(req.session.authorUserid){
    res.render('author/create', {option: 'Private', username: req.session.authorUsername});
    }else{
        res.redirect('/login')
    }
}
exports.member = (req, res) => {

    console.log(req.session.authorUserid);
   if(req.session.authorUserid){
    res.render('author/create', {option: 'Member', username: req.session.authorUsername});
    }else{
        res.redirect('/login')
    }
}
exports.view = (req, res) => {
   if(req.session.authorUserid){
      //get all blogs
      sqlController.getAllBlogs(req.session.authorUserid,(result, err) => { // change id, id to be selected from user login 
        if(err) throw err;
        res.render('author/blogview', {blogs: result, username: req.session.authorUsername});
    })//change user id
    }else{
        res.redirect('/login')
    }
    
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
        res.redirect('/author/view')

        // res.render('author/author-index',{msg: 'blog post deleted'}) // redirect to page
    })
}
exports.edit =  (req, res) => {
    
    getBlogData(req,res, req.params)
}
exports.editBlog =  (req, res) => {
    editBlog(req,res,req.params)
}
exports.logout = (req, res) =>{
    req.session.destroy()
    res.redirect('/login')
}
