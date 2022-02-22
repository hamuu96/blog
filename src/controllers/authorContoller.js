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

