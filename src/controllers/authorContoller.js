const express = require('express')
const fs = require('fs')
const sqlController = require('./sqlController')
const cookie = require('cookie-parser')
const bcrypt = require('bcrypt')
const readline = require('readline')
const escape = require('escape-html');
const { builtinModules } = require('module')


exports.author = (req, res) => {
    res.render('author/author-index');
}

exports.profile = (req, res) => {
    res.render('author/author-profile');
}


exports.public = (req, res) => {
    // res.json({msg: 'create public blog'})
    res.render('author/create-public');
}

exports.private = (req, res) => {
    res.json({msg: 'create private blog'})
    // res.render('author/author-profile');
}

exports.member = (req, res) => {
    res.json({msg: 'create member blog'})
    // res.render('author/author-profile');
}

exports.view= (req, res) => {
    res.json({msg: 'view blog'})
    // res.render('author/author-profile');
}
