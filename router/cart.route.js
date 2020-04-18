var express =require('express');
var router =express.Router();

var cart=require("../controllers/cart.controller");

router.get('/show/:id',cart.addToCart);

router.post('/cart',cart.getCart);

module.exports=router;