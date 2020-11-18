var express = require('express');
var router = express.Router();

var receiver = require("../Services/ReceiverService");

router.post('/add',receiver.addReceiver);

router.get('/total',receiver.totalReceiver);

module.exports=router;