var express = require('express');
var router = express.Router();

const Donation = require('../Services/DonationService');
const { route } = require('./VolunteerRoute');

//get all Food Donations
router.get('/getAllFoodDonation',Donation.getAllFoodDonation)

//get all Money Donations
router.get('/getAllMoneyDonation',Donation.getAllMoneyDonation)

//get all delievered Food
router.get('/getAllDeliveredFood',Donation.getAllDeliveredFood)

//add Food Listing
router.post('/addFoodListing',Donation.addFoodListing)

//add Donation
router.post('/addMoneyDonation',Donation.addMoneyDonation)

//add Food Delievry
router.post('/addFoodDelivery',Donation.addFoodDelivery)

//add Food Request
router.post('/addFoodRequest',Donation.addFoodRequest)

//get All Food Request
router.get('/getAllFoodRequest',Donation.getAllFoodRequest)

//get Food Request by id
router.get('/getFoodRequestById/:id',Donation.getFoodRequestById)

//edit Food Request
router.put('/editFoodRequest/:id',Donation.editFoodRequest)

//delete Food request
router.delete('/deleteFoodRequest/:id',Donation.deleteFoodRequest)

//total food donation
router.get('/total',Donation.total);

router.get('/totalMoney',Donation.totalMoney);

module.exports = router;