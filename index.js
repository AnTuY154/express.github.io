var express=require('express');
var app=express();

app.set('view engine','pug');
app.set('views','./views');
var bodyParse=require('body-parser');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-
var x=[1,2];
app.get('/',function(request,response){
  response.render('index',{
  	name:'AAA'
  });
});

app.get('/create',function(request,response){
  response.render('create');
});

app.post('/create',function(req,res){
	var q=req.body.xname;
	console.log(q);
    x.push(q);
  res.redirect('/users');
});

app.get('/users',function(request,response){
	// var q =request.query.q;
  response.render('user',{
  	age:x,
  	// old:q
  });
});

app.listen(3000,function(){
console.log('Hello word')
});

