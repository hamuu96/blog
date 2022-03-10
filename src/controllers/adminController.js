const express = require('express')
const fs = require('fs')
const session = require('express-session')
const sqlController = require('./sqlController')
const cookie = require('cookie-parser')
const bcrypt = require('bcrypt')
const readline = require('readline')

//is it ok to use a middleware in a controller file
const app = express();
app.use(express());
let admin_session, admin_id, username; 
exports.admin_root = (req, res ) => {
        //read logs from file
        const log = fs.readFileSync("access.log","utf8" ,function(err, contents){
            if(err) throw err;
            return contents
        })

        // console.log(req.session.username);
        //render admin index page
        if(req.session.username){
            res.render('admin/admin-index', {logs: log, admin_session: username} );
        }else{
            res.render('admin/admin-login');
        }
    // // read log from file
};

exports.admin_login = (req,res,next ) => {
    res.render('admin/admin-login');
}

exports.login_auth = async (req, res,next) => {
   
    admin_session = req.session;

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
                        req.session.username = result[0]['username'];
                        req.session.admin_id = result[0]['admin_id'];
                        res.status(200);
                        //redirect to admin index page
                        res.redirect('/admin');
                    }else{
                        // res.json({err: 'not success'})
                        res.send("not successful with login")

                    }
            } catch{
                res.json({msg: ' not working'})
                    // res.status(500).send()
            }
            }
        })
    }

  
}
exports.logout = (req, res) =>{
    delete userid, username; 
    res.redirect('/admin/login')
}


