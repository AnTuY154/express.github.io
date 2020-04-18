var express =require('express');
var router =express.Router();


var controllers=require("../controller/product.controller");


router.get('/products',controllers.getProduct);

// router.post('/products',controllers)
router.post('/create',controllers.postProduct);

router.put('/put/:id',controllers.putProduct);


module.exports=router;