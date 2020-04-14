var express=require('express');
var bodyParse=require('body-parser');
var userRoutes=require('./router/user.route');

var app=express();
app.set('view engine','pug');
app.set('views','./views');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-
var controllers=require("./controllers/users.controller");

app.use(express.static('public'));
app.get('/',controllers.index);

app.use('/users',userRoutes);

app.listen(3000,function(){

});

