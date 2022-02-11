
exports.admin_login = (req,res,next ) => {
    res.render('admin/admin-login');
}

exports.login = (req, res, next) => {
    req.header("Content-Type", "application/json");
    res.send('logged in');

    var data = req.body; 
    console.log(data);
    
}


