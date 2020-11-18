var express = require('express');
var router = express.Router();

var volunteer = require("../Services/VolunteerService");

router.post("/addVolunteer",volunteer.signup);

router.get("/getAll",volunteer.getAll);

router.get('/total',volunteer.total);

module.exports=router;