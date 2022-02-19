const express = require('express')
const fs = require('fs')
const sqlController = require('./sqlController')
const cookie = require('cookie-parser')
const bcrypt = require('bcrypt')
const readline = require('readline')

//is it ok to use a middleware in a controller file
const app = express();


app.use(express());

exports.admin_root = (req, res ) => {
   

    const log = fs.readFileSync("access.log","utf8" ,function(err, contents){
        if(err) throw err;
        return contents
    })
    // console.log(req.cookies) // cookies not working
    // console.log(log)
    res.render('admin/admin-index', {logs: log} );

};

exports.admin_login = (req,res,next ) => {
    res.render('admin/admin-login');
}

exports.login_auth = async (req, res,next) => {

    const {email , password } = req.body
    //check if fields are not empty
    if(email == '' && password == ''){
        res.json({err:'please fill form'})
    }
    else{
        sqlController.getAdminCreds(req.body.email, (result) =>{
            if(result.length == 1){
                
            try{
                //check password provided with one in database
                const hashcompare = bcrypt.compareSync(req.body.password, result[0]['password'])
                    if(hashcompare){
                        res.status(200);
                        //redirect to admin index page
                        res.redirect('/admin/');
                    }
                    else{
                        // res.json({err: 'not success'})
                        res.send("success")

                    }
            } catch{
                    res.status(500).send()
            }
            }
        })
    }

  
}


