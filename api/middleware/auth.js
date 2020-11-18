const user=require('../models/User');
const jwt=require("jsonwebtoken");
const secret=process.env.secret;

const auth=async(req,res,next)=>
{
    try{
        //console.log("auth running");
        const token=req.header("authorization").replace("Bearer ","");
        //console.log(token);
        const valid=await jwt.verify(token,secret);
        const u=await user.findById(valid._id)
        //console.log(u);
        if(!u)
        {
            throw new Error("user not found");
        }
        req.validUser=u;
        req.token=token;
        next();
    } catch(e)
    {
        res.status(403).send("not authenticated");
    }
}

module.exports=auth;