require('dotenv').config();

var express=require('express');

var bodyParse=require('body-parser');

var userRoutes=require('./router/user.route');
var loginRoutes=require('./router/login.route');
var productRoutes=require('./router/product.route');

var cookieParser=require('cookie-parser');

var app=express();
app.set('view engine','pug');
app.set('views','./views');


app.use(bodyParse.json()) // for parsing application/json
app.use(bodyParse.urlencoded({ extended: true })) // for parsing application/x-

app.use(cookieParser('12345asd6789a'));

var controllers=require("./controllers/users.controller");

var auth1=require("./middleware/auth");

app.use(express.static('public'));
app.get('/cookie',function(req,res){
   res.cookie('id',1234);
   res.send('Hello');
});

app.get('/',auth1.auth,controllers.index);
app.use('/',loginRoutes);
app.use('/users',auth1.auth,userRoutes);

app.use('/product',productRoutes);

app.listen(3000,function(){

});

