var express = require('express');
var router = express.Router();

var user = require("../Services/UserService");

router.post("/addRole",user.addRole);

router.post("/add",user.addUser);

module.exports=router;