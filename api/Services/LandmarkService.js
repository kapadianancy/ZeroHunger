const landmark=require('../models/Landmark');


exports.add=async(req,res)=>
{
    try
    {
        const l=new landmark(req.body);
        var result=await l.save();
        if(!result)
        {
            return res.status(400).send("bad request");
        }
        return res.status(201).send("added "+l);

    }catch(err)
    {
        res.status(400).send(err);
    }
}

exports.getAll = async (req, res) => {
    try {
        const data = await landmark.find({is_deleted:false})
        res.status(200).send(data)

    } catch (err) {
        return res.status(400).send("bad request");
    }
}


exports.delete = async (req, res) => {
    try {
        const data = await landmark.findById(req.params.id);
        data.is_deleted=true;
        await data.save();
        res.status(200).send(data)

    } catch (err) {
        return res.status(400).send("bad request");
    }
}

exports.edit = async (req, res) => {
    try {
        await landmark.findByIdAndUpdate(req.params.id, req.body, (err) => {
            if (err) {
                return res.status(400).send(err)
            }
            else {
                return res.status(201).send("landmark Updated")
            }
        });
    } catch (e) {
        return res.status(400).send("Not Updated")
    }
}