const express = require('express')
const fs = require('fs')
const sqlController = require('./sqlController')
const cookie = require('cookie-parser')
const bcrypt = require('bcrypt')
const readline = require('readline')
const escape = require('escape-html');

const app = express();
app.use(express());


exports.signup = (req, res, next) => {


    
    const { firstname, lastname, email, password, address, author, dob } = req.body;
    



    const isoDate = new Date(dob);
    const mySQLDateString = isoDate.toJSON().slice(0, 19).replace('T', ' ');

    bcrypt.genSalt(5, async function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            // Store hash in your password DB.

            sqlController.insertUsers(firstname, lastname, email, hash, address, author, mySQLDateString, (result, err) =>{
                if(err) throw err;
                res.json({msg: 'success'});
            });
        });
    });

    
}