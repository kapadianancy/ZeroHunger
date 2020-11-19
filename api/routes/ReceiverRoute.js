var express = require('express');
var router = express.Router();

var auth=require('../middleware/auth');
var receiver = require("../Services/ReceiverService");

router.post('/add',receiver.addReceiver);

router.get('/total',receiver.totalReceiver);

router.get('/getAll',receiver.getAll);

router.put('/edit/:id',auth,receiver.edit);

router.delete('/delete/:id',auth,receiver.delete);

router.get('/areaWiseTotal',receiver.areaWiseTotal);

module.exports=router;