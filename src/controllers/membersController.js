const express = require('express')
const sql = require('../database/sql')
const sqlController = require('./sqlController')

const view_option = 'member'

exports.getMemberBlogs = (req, res) =>{
    if(req.session.memberUsername | req.session.authorUserid){

            sqlController.getMemberBlog(view_option, (result, err) => {
                if(err) throw err;
                // console.log(result[0]['user_id']);
                sqlController.selectDataFromID(result[0]['user_id'], (userresult, err) => {
                    res.render('user/main', {memberBlogs: result, userdata: userresult});
                })
                // // console.log(result);
               
            })
        
    }else{
        res.redirect('/login')
    }
}