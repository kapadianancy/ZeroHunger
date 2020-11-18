var donor=require("../models/Donor");
var donorCat=require('../models/Donor_category');

exports.addDonor=async(req,res)=>
{
    try
    {
        const r=new donor(req.body);
       
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

exports.addCat=async(req,res)=>
{
    try{
        const cat=new donorCat(req.body);
        const result=await cat.save();
        if(result)
        {
            return res.status(201).send("category inserted"+cat);
        }
        else
        {
            return res.status(400).send("bad request");
        }

    }catch(err)
    {
        res.status(400).send(err);
    }
}


exports.getAllCat = async (req, res) => {
    try {
        const data = await donorCat.find({is_deleted:false})
        res.status(200).send(data)

    } catch (err) {
        return res.status(400).send("bad request");
    }
}


exports.deleteCat = async (req, res) => {
    try {
        const data = await donorCat.findById(req.params.id);
        data.is_deleted=true;
        await data.save();
        res.status(200).send(data)

    } catch (err) {
        return res.status(400).send("bad request");
    }
}

exports.editCat = async (req, res) => {
    try {
        await donorCat.findByIdAndUpdate(req.params.id, req.body, (err) => {
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
exports.totalDonor=async(req,res)=>
{
    try{
        var total=await donor.where({is_deleted:false}).count();          
        
        if(total == 0)
        {
            return res.status(200).send(`no data found`);
        }
        return res.status(200).send(`total donors ${total}`);

    }catch(err)
    {
        return res.status(400).send("bad request");
    }
}