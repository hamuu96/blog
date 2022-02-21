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
    console.log();

    //check if user exists
    sqlController.getUser(email, (result, err) =>{
        // res.json({msg: result.length})
        if(result.length > 0){
            res.json({err: 'user already exists'})
        }else{
             //check if password is longer than 8 characters
            if(password.length <= 8){
                res.json({err: 'please enter a longer password'})
            }
            else{
            //generate salt and encrypt password  
                bcrypt.genSalt(5, async function(err, salt) {
                    bcrypt.hash(password, salt, function(err, hash) {
                        //insert user into user table
                        sqlController.insertUsers(firstname, lastname, email, hash, address, author, mySQLDateString, (result, err) =>{
                            if(err) throw err;
                            res.status(200);
                            res.redirect('/main');
                            // res.json({msg: 'success'});
                        });
                    });
                });
            } 
        }
       
    }) 
      

   
   
}