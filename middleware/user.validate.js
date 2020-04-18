
var db=require('../DB/db');

module.exports.validate=function(req,res,next){
  var name=req.body.xname;
  var userName=req.body.xuserName;
  var password=req.body.xpassword;
  var path=req.file.path;
  var err=[];
  if(!name){
    err.push("Name is required");

  }
  if(!userName){
  err.push("User Name is required");
  }

  if(!password){
  err.push("Password is required");
  }

  if(!path){
  err.push("Path is required");
  }

  if(err.length!==0){
    res.render('users/create',{
    errors:err
  });
    return;
  }


   next();
}

module.exports.getId=function(req,res,next){
  var z=0;
  var xdb=db.get('users').value();
  if(xdb.length===0){
    z=1;
  }else{
  z=parseInt(xdb[xdb.length-1].id) +1;
}
  res.locals.id=z;
   next();
}