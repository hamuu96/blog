const express = require('express')
const sql = require('../database/sql')
const sqlController = require('../controllers/sqlController')

const view_option = 'public'
//
exports.getlogin = (req, res) =>{
    res.render('user/login');
//    res.json({msg: 'sucess'}) ;
}

// get signup page
exports.getsignup = (req, res) =>{
    //    res.json({msg: 'signup'}) ;
        res.render('user/signup');
}
// forward user to main page once logged in
exports.userloggedin = (req, res) =>{
    res.render('user/main');
}

//fetch blogs from database
exports.getBlogs = (req, res) =>{

    //initialize database tables
    const create_tables = require('../database/tables');
    // get blog with view option public
    sqlController.getPublicBlog(view_option, (result, err) => {
        if(err) throw err;
        res.render('user/index', {publicBlogs: result});
    })
}
//diplay single blog items
exports.displaySingleBlog = (req, res) =>{
    // console.log(req.params['id']);
    sqlController.getSingleBlog(req.params['id'], (result, err) => {
        if(err) throw err;
        
        res.render('user/single', {singleBlogItem: result});
    })
};

