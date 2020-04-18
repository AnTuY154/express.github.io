var mongoose=require('mongoose');

var userSchema =new mongoose.Schema({
   	name:String,
   	userName:String,
   	password:String,
   	path:String

});

var User = mongoose.model('User',userSchema,'users');

module.exports=User;