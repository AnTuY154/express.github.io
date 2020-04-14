
function customer(name,id){
    this.name=name;
    this.id=id;
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
        var q=req.body.xname;
      var z=0;
      var xdb=db.get('users').value();
      if(xdb.length===0){
        z=1;
      }else{
      z=parseInt(xdb[xdb.length-1].id) +1;
    }
     var c=new customer(q,z);
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





  