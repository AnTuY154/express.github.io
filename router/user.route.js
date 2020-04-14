var express =require('express');
var router =express.Router();

var db=require('../DB/db');

function customer(name,id){
  this.name=name;
  this.id=id;
}

router.get('/create',function(request,response){
  response.render('users/create');
});

router.get('/user/:id',function(request,response){
  var id = parseInt(request.params.id);
  var xdb=db.get('users').value();
   var user=xdb.filter(function(item1) {
     return item1.id===id;
   });;
   response.render('users/view',{
      user : user
   });
});

router.post('/create',function(req,res){
	var name=req.body.xname;
	var err=[];
	if(!name){
		err.push("Name is required");
		res.render('users/create',{
		errors:err
  });
		  return;
	}else{
  var z=0;
  var xdb=db.get('users').value();
  if(xdb.length===0){
    z=1;
  }else{
  z=parseInt(xdb[xdb.length-1].id) +1;
}
 var c=new customer(name,z);
 console.log(c);
  db.get('users').push(c).write();
  res.redirect('./user');
}
});

router.get('/user',function(request,response){
  // var q =request.query.q;
  // 
  response.render('users/user',{
  	age:db.get('users').value()
  	// old:q
  });
});

module.exports=router;