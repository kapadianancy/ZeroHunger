const CharityEvent = require('../models/Charity_event');

exports.getAllEvent = async (req, res) => {
    try {
        const data = await CharityEvent.find({
            isDeleted: 0
        })

        return res.status(200).send(data)


    } catch (err) {
        return res.status(400).send("bad request");
    }
}

exports.getEventById = async (req, res) => {
    try {
        const data = await CharityEvent.findOne({
            _id: req.params.id,
            isDeleted: 0
        })
        if (data) {
            return res.status(200).send(data)
        }
        else {
            return res.status(400).send("No Data Found")
        }

    } catch (err) {
        return res.status(400).send("Event Not Found");
    }
}

exports.addEvent = async (req, res) => {
    const event = new CharityEvent(req.body)
    try {
        await event.save();
        return res.status(201).send("Event Insetred")
    } catch (e) {
        return res.status(400).send(e)
    }
}


exports.editEvent = async (req, res) => {
    try {
        await CharityEvent.findByIdAndUpdate(req.params.id, req.body, (err) => {
            if (err) {
                return res.status(400).send(err)
            }
            else {
                return res.status(201).send("Event Updated")
            }
        });
    } catch (e) {
        return res.status(400).send("Not Updated")
    }
}

exports.deleteEvent = async (req, res) => {
    try {
        await CharityEvent.findByIdAndUpdate(req.params.id, {
            isDeleted: 1
        }, (err) => {
            if (err) {
                return res.status(400).send(err)
            }
            else {
                return res.status(201).send("Event Deleted")
            }
        });
    } catch (e) {
        return res.status(400).send("Not Deleted")
    }
}