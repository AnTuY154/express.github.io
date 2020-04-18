var express =require('express');
var router =express.Router();

var db=require('../DB/db');

//read data from request with form file
var multer=require("multer");

var upload=multer({dest:'./public/uploads/'});

var controllers=require("../controllers/users.controller");

var userLogic=require("../middleware/user.validate");

router.get('/create',controllers.createGet);

router.get('/user/:id',controllers.viewById);

router.post('/create',upload.single('xavatar'),userLogic.validate,userLogic.getId,controllers.createPost);

router.get('/user',controllers.usersSearch);

module.exports=router;