var db=require('../DB/db');

module.exports.setSession=function(req,res,next){
   if(!req.signedCookies.sessionId){
   	console.log("1");
   	res.cookie('sessionId','123abc345',{
    	signed:true
    });
     db.get('sessionID').push({
     	id: '123abc345'
     }).write();
   }
   next();
}