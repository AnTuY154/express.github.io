var db=require('../DB/db');

module.exports.auth=function(req,res,next){
   var userID =req.cookies.userID;
   if(!userID){
   	res.redirect("../login");
   	return;
   }
   userID=parseInt(userID);
   var user=db.get('users').find({id :userID}).value();
   if(!user){
    res.redirect("../login");
   	return;
   }
   next();
}