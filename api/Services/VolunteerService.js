var volunteer=require('../models/Volunteer');

exports.signup=async(req,res)=>
{
    try
    {
        const v= new volunteer(req.body);
        var result=await v.save();
        if(!result)
        {
            return res.status(400).send("bad request");
        }
        return res.status(201).send("registered");

    }catch(err)
    {
        res.status(400).send(err);
    }
}

exports.getAll = async (req, res) => {
    try {
        volunteer.find({is_deleted:false})
        .populate("user_id")
        .exec((err,v)=>
        {
            if(err)
            {
                return res.status(400).send(err);
            }
            else
            {
                return res.status(200).send(v)
            }
        })
        

    } catch (err) {
        return res.status(400).send("bad request");
    }
}