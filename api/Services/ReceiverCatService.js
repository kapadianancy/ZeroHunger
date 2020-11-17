const ReceiverCat=require("../models/Receiver_category");

exports.add=async(req,res)=>
{
    try{
        const cat=new ReceiverCat(req.body);
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


exports.getAll = async (req, res) => {
    try {
        const data = await ReceiverCat.find({is_Deleted:false})
        res.status(200).send(data)

    } catch (err) {
        return res.status(400).send("bad request");
    }
}


exports.delete = async (req, res) => {
    try {
        const data = await ReceiverCat.findById(req.params.id);
        data.is_Deleted=true;
        await data.save();
        res.status(200).send(data)

    } catch (err) {
        return res.status(400).send("bad request");
    }
}

exports.edit = async (req, res) => {
    try {
        await ReceiverCat.findByIdAndUpdate(req.params.id, req.body, (err) => {
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
