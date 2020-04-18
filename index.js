require('dotenv').config();

var express=require('express');

var bodyParse=require('body-parser');

var userRoutes=require('./router/user.route');
var loginRoutes=require('./router/login.route');
var productRoutes=require('./router/product.route');
var cartRoutes=require('./router/cart.route');

//set api
var apiProduct=require('./api/router/product.route');

//set data Mongo
var mongoose =require('mongoose');


mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose
.connect('mongodb://localhost/express-demo', { useNewUrlParser: true })
.then()
.catch((err) => console.log(err));

var cookieParser=require('cookie-parser');

var app=express();
app.set('view engine','pug');
app.set('views','./views');


app.use(bodyParse.json()) // for parsing application/json
app.use(bodyParse.urlencoded({ extended: true })) // for parsing application/x-

app.use('/api/product',apiProduct);


app.use(cookieParser('12345asd6789a'));

var controllers=require("./controllers/users.controller");

var auth1=require("./middleware/auth");
var session=require("./middleware/session");

app.use(express.static('public'));
app.get('/cookie',function(req,res){
   res.cookie('id',1234);
   res.send('Hello');
});

app.get('/',auth1.auth,controllers.index);

// app.get('/*',session.setSession);

app.use('/',loginRoutes);

app.use('/users',auth1.auth,userRoutes);

app.use('/product',session.setSession,productRoutes);

app.use('/cart',cartRoutes);







app.listen(process.env.PORT||3000,function(){

});

