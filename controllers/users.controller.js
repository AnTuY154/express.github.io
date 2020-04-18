var md5=require('md5');
function customer(name,password,userName,id,path){
    this.password=password;
    this.userName=userName;
    this.name=name;
    this.id=id;
    this.path=path;
  }

module.exports={
    index : function(request,response){
        response.render('index',{
          name:'King'
        });
      },
      createGet : function(request,response){
        response.render('users/create');
      },
      viewById :function(request,response){
        var id = parseInt(request.params.id);
        var xdb=db.get('users').find({id :id}).value();
         response.render('users/view',{
            user : xdb
         });
      },
      createPost: function(req,res){
    var name=req.body.xname;
    var userName=req.body.xuserName;
    var password=req.body.xpassword;
    password=md5(password);
    var z=res.locals.id;
    var path=req.file.path.split('\\').slice(1).join('/');
    var c=new customer(name,password,userName,z,path);
    db.get('users').push(c).write();
    res.redirect('./user');
},
     usersSearch :function(request,response){
        var q =request.query.q;
        var search;
        var xdb=db.get('users').value();
        if(q===null ||q===undefined||q.length===0){
          search =xdb;
        }else{
            var x=q.trim();
           search=xdb.filter(function(item1){
            return item1.name.indexOf(x) !==-1;
         });
        }
        response.render('users/user',{
            age:search,
            old:q
        });
      }


}