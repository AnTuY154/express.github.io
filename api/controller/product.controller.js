
// var db=require('../DB/db');
//
var Product =require('../../models/product.model')

module.exports.getProduct= async function(req,res,next){
    // var page=parseInt(req.query.page) || 1;
    // var pageSize=6;
    // var drop=(page-1)*pageSize;
    // var totalProduct=db.get('product').value().length;
    // var totalPage =totalProduct/pageSize;
    // var xdb=db.get('product').drop(drop).take(pageSize).value();
    // var row=pageSize/3;
    // res.render("./product/products",{
    // 	datas: xdb,
    // 	row:row,
    // 	totalPage:totalPage,
    // 	pageIndex:page
    // });

   var products= await Product.find();
   res.json(products);

};

module.exports.postProduct= async function(req,res,next){
   var products= await Product.create(req.body);
   res.json(products);

};



module.exports.putProduct= async function(req,res,next){

   var products=await Product.updateOne({ _id: req.params.id }, req.body);
   // var products= await Product.create(req.body);
   res.json(products);

};

