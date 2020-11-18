var express = require('express');
var path = require('path');
var router = express.Router();

const Portfolio = require('../Services/PortfolioService');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/portfolio');
    },
    filename: (req, file, cb) => {
        cb(null,'portfolio'+file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb("Must be an Image", false);
    }
}
const upload = multer({ storage: storage, fileFilter: fileFilter });

//get all portfolio
router.get('/getAllPortfolio',Portfolio.getAllPortfolio)

//get portfolio by id
router.get('/getPortfolioById/:id',Portfolio.getPortfolioById)

//add Portfolio
router.post('/addPortfolio',upload.single('image'),Portfolio.addPortfolio)

//edit Portfolio
router.put('/editPortfolio/:id',upload.single('image'),Portfolio.editPortfolio)

//delete Portfolio
router.delete('/deletePortfolio/:id',Portfolio.deletePortfolio)

module.exports = router;