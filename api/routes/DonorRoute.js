var express = require('express');
var router = express.Router();
var donor=require('../Services/DonorService');
const { route } = require('./EventRoute');

router.post("/addDonor",donor.addDonor);

router.get("/getDonorCat",donor.getAllCat);

router.post("/addDonorCat",donor.addCat);

router.put("/editDonorCat",donor.editCat);

router.delete("/deleteDonorCat",donor.deleteCat);

router.get("/totalDonor",donor.totalDonor)

module.exports = router;