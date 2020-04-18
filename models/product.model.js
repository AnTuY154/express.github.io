var mongoose=require('mongoose');

var userSchema =new mongoose.Schema({
   	imagePath:String,
   	title:String,
   	shortDes:String

},{versionKey: false});

var Product = mongoose.model('Product',userSchema,'product');

module.exports=Product;
