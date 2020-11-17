var express = require('express');
var router = express.Router();

var volunteer = require("../Services/VolunteerService");

router.post("/singup",volunteer.signup);

router.get("/getAll",volunteer.getAll);

module.exports=router;