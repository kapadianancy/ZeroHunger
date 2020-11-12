const CharityEvent = require('../models/Charity_event');

exports.getAllEvent = async (req, res) => {
    try {
        const data = await CharityEvent.find()
        res.status(200).send(data)

    } catch (err) {
        return res.status(400).send("bad request");
    }
}

exports.getEventById = async (req, res) => {
    try {
        const data=await CharityEvent.findById(req.params.id)
        return res.status(200).send(data)

    } catch (err) {
        return res.status(400).send("Event Not Found");
    }
}

exports.addEvent = async (req, res) => {
    const event = new CharityEvent(req.body)
    try 
    {
        await event.save();
        return res.status(201).send("Event Insetred")
    } catch (e) {
        return res.status(400).send(e)
    }
}