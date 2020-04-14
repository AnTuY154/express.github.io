
var db=require('../DB/db');

module.exports.validate=function(req,res,next){
  var name=req.body.xname;
  var err=[];
  if(!name){
    err.push("Name is required");
    res.render('users/create',{
    errors:err
  });
      return;
  }
   res.locals.name=name;
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