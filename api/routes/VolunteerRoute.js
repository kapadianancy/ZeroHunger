var express = require('express');
var router = express.Router();

var auth=require('../middleware/auth');
var volunteer = require("../Services/VolunteerService");

router.post("/addVolunteer",volunteer.signup);

router.get("/getAll",volunteer.getAll);

router.get('/total',volunteer.total);

router.delete('/delete/:id',auth,volunteer.delete);

router.get('/areaWiseTotal/:id',volunteer.areaWiseTotal)

router.get('/areaWise',volunteer.areaWise)

router.put('/edit/:id',auth,volunteer.edit);

//-----------------------------------------------------------------------------------
router.post('/addLandmarkManager',auth,volunteer.addLandmarkManager);

router.get('/getAllLandmarkManager',volunteer.getAllLandmarkManager)

router.delete('/deleteLandmarkManager/:id',auth,volunteer.deleteLandmarkManager);

module.exports=router;