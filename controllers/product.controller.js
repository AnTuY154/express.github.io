
// var db=require('../DB/db');
//
var Product =require('../models/product.model')

module.exports.getProduct= async function(req,res,next){
    var page=parseInt(req.query.page) || 1;
    var pageSize=1;
    var drop=(page-1)*pageSize;
    var xdb= await Product.find({},null,{skip:drop});
    var totalProduct=5;
    var totalPage =totalProduct/pageSize;
    // var xdb=db.get('product').drop(drop).take(pageSize).value();
    var row=pageSize/3;
    res.render("./product/products",{
    	datas: xdb,
    	row:row,
    	totalPage:totalPage,
    	pageIndex:page,
    	pageSize: pageSize
    });


    // Product.findOneAndUpdate( {title :'Hello Word'},{$set {title:'Hello word123'}};
    	// res.render('./product/products',{
     //        datas:products,
     //        row:2,
    	// 	totalPage:1,
    	// 	pageIndex:1
    	// });
    	// Product.findOneAndUpdate({title :'Hello Word'}, { $set: {title:'Hello word123' }},function(req,res){
     //  res.render('./product/products');
    	// });



// Product.findOneAndUpdate({title :"Hello word"},  { $set: {title:'Hello word123' }}, { new: true, upsert: false, remove: {}, fields: {} }, function(err, updatedProfile){
//               if(err) {
//                       console.log(1);
//               } else {
          
//           console.log(2);
//               }
//           });

// Product.updateOne({ title: 'Hello word' }, { title: 'Hello word 12345' }, function(err, res) {

// });

//    		Product.insertMany([{ title: 'small' },{title :'big'}], function(err) {
// 			res.render('./index');
// });
//  console.log(1);
//  
//get number of elemt shkip : bo qua n ban ghi dau tien

 // var query = Product.find({ title : 'Hello word 12345' }, null, { skip: 1 });
 // var promise = query.exec();
 // promise.addBack(function (err, docs) {});

}
