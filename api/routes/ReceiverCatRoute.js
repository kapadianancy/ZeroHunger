var express = require('express');
var router = express.Router();

const ReceiverCat=require("../Services/ReceiverCatService");

//get all receiver category
router.get('/getAll',ReceiverCat.getAll);

//add receiver category
router.post("/add",ReceiverCat.add);


//delete receiver category
router.delete("/delete/:id",ReceiverCat.delete);

//edit receiver category
router.put("/edit/:id",ReceiverCat.edit);

module.exports = router;