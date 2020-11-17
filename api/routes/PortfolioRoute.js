var express = require('express');
var router = express.Router();

const Portfolio = require('../Services/PortfolioService');

//get all portfolio
router.get('/getAllPortfolio',Portfolio.getAllPortfolio)

//get portfolio by id
router.get('/getPortfolioById/:id',Portfolio.getPortfolioById)

//add Portfolio
router.post('/addPortfolio',Portfolio.addPortfolio)

//edit Portfolio
router.put('/editPortfolio/:id',Portfolio.editPortfolio)

//delete Portfolio
router.delete('/deletePortfolio/:id',Portfolio.deletePortfolio)

module.exports = router;