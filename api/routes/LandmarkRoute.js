var express = require('express');
var router = express.Router();

var landmark = require("../Services/LandmarkService");

router.post("/add",landmark.add);

router.get("/getAll",landmark.getAll);

router.put("/edit/:id",landmark.edit);

router.delete("/delete/:id",landmark.delete);

module.exports=router;