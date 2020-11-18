const user=require('../models/User');
const role=require("../models/Role");
const util=require('./utils');

exports.addUser=async(req,res)=>
{
    try
    {
        const u=new user(req.body);
        var token=await util.generateToken(u);
        if(!token)
        {
            return res.status(400).send("bad request");
        }
        var result=await u.save();
        if(!result)
        {
            return res.status(400).send("bad request");
        }
        return res.status(201).send("registered "+u + token);

    }catch(err)
    {
        res.status(400).send(err);
    }
}

exports.addRole=async(req,res)=>
{
    try
    {
        const r=new role(req.body);
       
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



