var express =require('express');
var router =express.Router();

var loginAuth=require("../controllers/login.controller");

router.get('/login',loginAuth.getLogin);

router.post('/login',loginAuth.postLogin);

module.exports=router;