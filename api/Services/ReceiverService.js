var receiver=require("../models/Receiver");

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