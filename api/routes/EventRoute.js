var express = require('express');
var router = express.Router();

var auth=require('../middleware/auth');
const Event = require('../Services/EventService');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/event');
    },
    filename: (req, file, cb) => {
        cb(null,'event'+file.originalname);
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

//get all events
router.get('/getAllEvent',Event.getAllEvent)

//get event by id
router.get('/getEventById/:id',Event.getEventById)

//add event
router.post('/addEvent',auth,upload.single('banner'),Event.addEvent)

//edit event
router.put('/editEvent/:id',auth,upload.single('banner'),Event.editEvent)

//delete event
router.delete('/deleteEvent/:id',auth,Event.deleteEvent);

router.get('/total',Event.total);

module.exports = router;