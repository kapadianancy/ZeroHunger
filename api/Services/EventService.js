const CharityEvent = require('../models/Charity_event');

exports.getAllEvent = async (req, res) => {
    try {
        const data = await CharityEvent.find({
            is_deleted: 0
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
            is_deleted: 0
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
    const e ={
        banner: "/images/" + 'event' + req.file.originalname,
        ...req.body
    }
    const event = new CharityEvent(e)
    try {
        await event.save();
        return res.status(201).send("Event Inserted")
    } catch (e) {
        return res.status(400).send(e)
    }
}


exports.editEvent = async (req, res) => {
    try {
        const e ={
            banner: "/images/" + 'event' + req.file.originalname,
            ...req.body
        }
        await CharityEvent.findByIdAndUpdate(req.params.id, e,{new:true,runValidators:true}, (err) => {
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
            is_deleted: 1
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

exports.total=async(req,res)=>
{
    try{
        var total=await CharityEvent.where({is_deleted:false}).count();          
        
        if(total == 0)
        {
            return res.status(200).send(`no data found`);
        }
        return res.status(200).send(`total events ${total}`);

    }catch(err)
    {
        return res.status(400).send("bad request");
    }
}