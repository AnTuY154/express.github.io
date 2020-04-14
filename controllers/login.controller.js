var db=require('../DB/db');

module.exports.postLogin=function(req,res,next){
    var userName=req.body.userName;
    var password=req.body.password;
var user=db.get('users').find({userName :userName}).value();
var error=[];
   if(!user){
   	error.push("Don't have user");
   	res.render("login/login",{
       errors :error
   	});
   	return;
   }

   if(user.password !== password){
   	   error.push("Wrong password");
   	 	res.render("login/login",{
       errors :error
   	});
   	return;
   }

    res.cookie('userID',user.id);

	res.redirect('./users/user')
}

module.exports.getLogin=function(req,res,next){
   	res.render("login/login");
}