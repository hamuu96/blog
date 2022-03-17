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
        if(result.length !=0 ){
            sqlController.selectDataFromID(result[0]['user_id'], (userresult, err) => {
                if(err) throw err;
                res.render('user/index', {publicBlogs: result, userdata: 0});
            })
        }else{
        res.render('user/index', {publicBlogs: result });
        }
        console.log(result.length);
        
       
    })
}
//diplay single blog items
exports.displaySingleBlog = (req, res) =>{
    // console.log(req.params['id']);
    // if statement (userid == session.user.id = output)
    sqlController.getSingleBlog(req.params['id'], (result, err) => {
        if(err) throw err;
    if(result[0]['view_option'] == 'Public' ){
        sqlController.selectDataFromID(result[0]['user_id'], (userresult, err) => {
            if(err) throw err;
            res.render('user/single', {singleBlogItem: result, userdata: userresult});
        }) 
    }else if(result[0]['view_option'] == 'Member' & req.session.authorUserid == result[0]['user_id'] ){
        sqlController.selectDataFromID(result[0]['user_id'], (userresult, err) => {
            if(err) throw err;
            res.render('user/single', {singleBlogItem: result, userdata: userresult});
        }) 
    }
    else{
        res.json({msg: 'cannot access member blogs'})
    } 
    })
};

