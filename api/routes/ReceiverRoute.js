var express = require('express');
var router = express.Router();

var receiver = require("../Services/ReceiverService");

router.post('/add',receiver.addReceiver);

router.get('/total',receiver.totalReceiver);

router.get('/getAll',receiver.getAll);

router.put('/edit/:id',receiver.edit);

router.delete('/delete/:id',receiver.delete);

router.get('/areaWiseTotal',receiver.areaWiseTotal);

module.exports=router;