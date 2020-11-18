var volunteer=require('../models/Volunteer');
var landmarkManager=require('../models/Landmark_manager');
const User = require('../models/User');

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



exports.delete = async (req, res) => {
    try {
        const data = await volunteer.findById(req.params.id);
        data.is_deleted=true;
        await data.save();
        res.status(200).send(data)

    } catch (err) {
        return res.status(400).send("bad request");
    }
}

exports.total=async(req,res)=>
{
    try{
        var total=await volunteer.where({is_deleted:false}).count();          
        
        if(total == 0)
        {
            return res.status(200).send(`no data found`);
        }
        return res.status(200).send(`total volunteers ${total}`);

    }catch(err)
    {
        return res.status(400).send("bad request");
    }
}

exports.areaWiseTotal=async(req,res)=>
{
    try{
        var total=await User.where({is_deleted:false})
            .where({role_id:"5fb3be8ccb07c31f57ab2908"}) //role id for volunteer
            .where({landmark_id:"5fb3be57cb07c31f57ab2905"})
        .countDocuments();          
        
        if(total == 0)
        {
            return res.status(200).send(`no data found`);
        }
        return res.status(200).send(`total volunteers ${total}`);

    }catch(err)
    {
        return res.status(400).send("bad request");
    }
}

exports.addLandmarkManager=async(req,res)=>
{
    try
    {
        const v= new landmarkManager(req.body);
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

exports.getAllLandmarkManager = async (req, res) => {
    try {
        landmarkManager.find({is_deleted:false})
        .populate("landmark_id")
        .populate("volunteer_id")
        .exec((err,v)=>
        {
            if(err)
            {
                return res.status(400).send(err);
            }
            else
            {
                return res.status(200).send(v);
              
            }
        })
        

    } catch (err) {
        return res.status(400).send("bad request");
    }
}

exports.deleteLandmarkManager = async (req, res) => {
    try {
        const data = await landmarkManager.findById(req.params.id);
        data.is_deleted=true;
        await data.save();
        res.status(200).send(data)

    } catch (err) {
        return res.status(400).send("bad request");
    }
}
