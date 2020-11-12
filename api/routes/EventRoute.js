var express = require('express');
var router = express.Router();

const Event = require('../Services/EventService');

//get all events
router.get('/getAllEvent',Event.getAllEvent)

//get event by id
router.get('/getEventById/:id',Event.getEventById)

//add event
router.post('/addEvent',Event.addEvent)

//edit event
router.put('/editEvent/:id',Event.editEvent)

//delete event
router.delete('/deleteEvent/:id',Event.deleteEvent)

module.exports = router;