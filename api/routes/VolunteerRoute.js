var express = require('express');
var router = express.Router();

var volunteer = require("../Services/VolunteerService");

router.post("/addVolunteer",volunteer.signup);

router.get("/getAll",volunteer.getAll);

router.get('/total',volunteer.total);

router.delete('/delete/:id',volunteer.delete);

router.post('/addLandmarkManager',volunteer.addLandmarkManager);

router.get('/getAllLandmarkManager',volunteer.getAllLandmarkManager)

router.delete('/deleteLandmarkManager/:id',volunteer.deleteLandmarkManager);
module.exports=router;