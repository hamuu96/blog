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
            if(password.length <= 3){
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
                            res.redirect('/login')
                            // res.json({msg: 'success'});
                        });
                    });
                });
            } 
        }
       
    }) 
}

exports.login =  async (req, res,next) => {

    const {email , password } = req.body
    //check if fields are not empty
    if(email == '' && password == ''){
        res.json({err:'please fill form'})
    }
    else{
        sqlController.getUser(req.body.email, (result) =>{
            if(result.length == 1){
                
            try{
                //check password provided with one in database
                const hashcompare = bcrypt.compareSync(password, result[0]['password'])
                    if(hashcompare){
                        if(result[0]['author'] == 'True'){
                            res.status(200);
                           res.redirect(301, '/author') //redirect to 
                            
                           next()
                        }else{
                            res.redirect('/main') // redirect to logged in user
                        }
                    }
                    else{
                        res.json({err: 'not success'})

                    }
            } catch{
                    res.status(500).send()
            }
            }
        })
    }

  
}

exports.author = (req, res) =>{
    res.render('author/author-index');
};