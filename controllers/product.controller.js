
var db=require('../DB/db');

module.exports.getProduct=function(req,res,next){
    var page=parseInt(req.query.page) || 1;
    var pageSize=6;
    var drop=(page-1)*pageSize;
    var totalProduct=db.get('product').value().length;
    var totalPage =totalProduct/pageSize;
    var xdb=db.get('product').drop(drop).take(pageSize).value();
    var row=pageSize/3;
    res.render("./product/products",{
    	datas: xdb,
    	row:row,
    	totalPage:totalPage,
    	pageIndex:page
    });
}
