var express =require('express');
var router =express.Router();

var db=require('../DB/db');

var controllers=require("../controllers/product.controller");


router.get('/products',controllers.getProduct);




module.exports=router;