const express = require('express')
const fs = require('fs')
const sqlController = require('./sqlController')
const cookie = require('cookie-parser')
const bcrypt = require('bcrypt')
const readline = require('readline')
const escape = require('escape-html');
const { builtinModules } = require('module')
const sql = require('../database/sql')

function insertBlogContent (req, res){
    const { heading, content, image,  file,  view_option, userid} = req.body
    // console.log(req.body);
    sqlController.insertBlog( heading, content, image,  file,  view_option, userid, (result, err) => {
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

exports.postBlog = (req, res) => {
    insertBlogContent(req, res)
}