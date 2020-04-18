var db=require('../DB/db');
module.exports.addToCart=function(req,res,next){
   	 var productID = req.params.id;
     var xdb=db.get('product').find({id :productID}).value();
     var sessionID=req.signedCookies.sessionId;
     if(!sessionID){
     	res.redirect('../../product/products');
     }
     if(productID !==null){
     var count=db.get('sessionID').find({id:sessionID}).get('cart.'+productID,0).value();
      db.get('sessionID').find({id:sessionID}).set('cart.'+productID,count+1).write();
    }
     // res.render('./product/products');
     // res.redirect('../../product/products');

}
module.exports.getCart=function(req,res,next){
	  console.log('1');
}
