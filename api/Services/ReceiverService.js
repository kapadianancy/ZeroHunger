var receiver=require("../models/Receiver");
var User=require('../models/User');

exports.addReceiver=async(req,res)=>
{
    try
    {
        const r=new receiver(req.body);
       
        var result=await r.save();
        if(!result)
        {
            return res.status(400).send("bad request");
        }
        return res.status(201).send("registered "+r);

    }catch(err)
    {
        res.status(400).send(err);
    }
}

exports.getAll = async (req, res) => {
    try {
        receiver.find({is_deleted:false})
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

exports.edit = async (req, res) => {
    try {
        await receiver.findByIdAndUpdate(req.params.id, req.body, (err) => {
            if (err) {
                return res.status(400).send(err)
            }
            else {
                return res.status(201).send("receiver Updated")
            }
        });
    } catch (e) {
        return res.status(400).send("Not Updated")
    }
}


exports.delete = async (req, res) => {
    try {
        const data = await receiver.findById(req.params.id);
        data.is_deleted=true;
        await data.save();
        res.status(200).send(data)

    } catch (err) {
        return res.status(400).send("bad request");
    }
}

exports.totalReceiver=async(req,res)=>
{
    try{
        var total=await receiver.where({is_deleted:false}).count();          
        
        if(total == 0)
        {
            return res.status(200).send(`no data found`);
        }
        return res.status(200).send(`total receivers ${total}`);

    }catch(err)
    {
        return res.status(400).send("bad request");
    }
}

exports.areaWiseTotal=async(req,res)=>
{
    try{
        var total=await User.where({is_deleted:false})
            .where({role_id:"5fb4b6040281d31dac44564d"}) //role id for receiver
            .where({landmark_id:"5fb3be57cb07c31f57ab2905"})  //adajan
        .countDocuments();          
        
        if(total == 0)
        {
            return res.status(200).send(`no data found`);
        }
        return res.status(200).send(`total receiver ${total}`);

    }catch(err)
    {
        return res.status(400).send("bad request");
    }
}