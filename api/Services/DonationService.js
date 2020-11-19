const Food_delivery = require('../models/Food_delivery');
const Food_listing = require('../models/Food_listing');
const Food_request=require('../models/Food_request');
const Donation = require('../models/Donation');
const User = require('../models/User');
const Receiver = require('../models/Receiver');
const Donor = require('../models/Donor');
const { request } = require('express');

exports.getAllFoodDonation = async (req, res) => {
    try {
        const data = await Food_listing.find({
            is_Deleted: 0
        })

        return res.status(200).send(data)


    } catch (err) {
        return res.status(400).send("Bad request");
    }
}

exports.getAllMoneyDonation = async (req, res) => {
    try {
        const data = await Donation.find({
            is_Deleted: 0
        })

        return res.status(200).send(data)


    } catch (err) {
        return res.status(400).send("Bad request");
    }
}

exports.getAllDeliveredFood = async (req, res) => {
    try {
        const data = await Food_delivery.find({
            status:"Delivered",
            is_Deleted: 0
        })

        return res.status(200).send(data)


    } catch (err) {
        return res.status(400).send("Bad request");
    }
}

exports.addFoodListing = async (req, res) => {
    const event = new Food_listing(req.body)
    try {
        await event.save();
        return res.status(201).send("Food Listing Inserted")
    } catch (e) {
        return res.status(400).send(e)
    }
}

exports.addMoneyDonation = async (req, res) => {
    const event = new Donation(req.body)
    try {
        await event.save();
        return res.status(201).send("Money Donation Inserted")
    } catch (e) {
        return res.status(400).send(e)
    }
}

exports.addFoodDelivery = async (req, res) => {
    const event = new Food_delivery(req.body)
    try {
        await event.save();
        return res.status(201).send("Food Delivery Inserted")
    } catch (e) {
        return res.status(400).send(e)
    }
}

exports.addFoodRequest = async (req, res) => {
    const event = new Food_request(req.body)
    try {
        await event.save();
        return res.status(201).send("Food Request Inserted")
    } catch (e) {
        return res.status(400).send(e)
    }
}

exports.getAllFoodRequest = async (req, res) => {
    try {
        const data = await Food_request.find({
            is_deleted: 0
        })

        return res.status(200).send(data)


    } catch (err) {
        return res.status(400).send("Bad request");
    }
}

exports.getFoodRequestById = async (req, res) => {
    try {
        const data = await Food_request.findOne({
            _id: req.params.id,
            is_Deleted: 0
        })
        if (data) {
            return res.status(200).send(data)
        }
        else {
            return res.status(400).send("No Data Found")
        }

    } catch (err) {
        return res.status(400).send("Food Request Not Found");
    }
}



exports.editFoodRequest = async (req, res) => {
    try {
        await Food_request.findByIdAndUpdate(req.params.id, req.body,{new:true,runValidators:true}, (err) => {
            if (err) {
                return res.status(400).send(err)
            }
            else {
                return res.status(201).send("Food Request Updated")
            }
        });
    } catch (e) {
        return res.status(400).send("Not Updated")
    }
}

exports.deleteFoodRequest = async (req, res) => {
    try {
        await Food_request.findByIdAndUpdate(req.params.id, {
            is_Deleted: 1
        }, (err) => {
            if (err) {
                return res.status(400).send(err)
            }
            else {
                return res.status(201).send("Food Request Deleted")
            }
        });
    } catch (e) {
        return res.status(400).send("Not Deleted")
    }
}

exports.total=async(req,res)=>
{
    try{
        var total=await Food_listing.where({is_deleted:false}).count();          
        
        if(total == 0)
        {
            return res.status(200).send(`no data found`);
        }
        return res.status(200).send(`total food donation ${total}`);

    }catch(err)
    {
        return res.status(400).send("bad request");
    }
}

exports.totalMoney=async(req,res)=>
{
    try{
        var total=await Donation.where({is_deleted:false}).count();          
        
        if(total == 0)
        {
            return res.status(200).send(`no data found`);
        }
        return res.status(200).send(`total money donation ${total}`);

    }catch(err)
    {
        return res.status(400).send("bad request");
    }
}

exports.areaWiseTotalRequest=async(req,res)=>
{
    try{
        Food_request.find().populate("receiver_id")
        .exec((err,data)=>
        {
            if(err)
            {
                return res.status(400).send(err);
            }
            else
            {
                data.map((d)=>
                {
                    Receiver.findById(d.receiver_id).populate("user_id").exec(async (err,user)=>
                    {
                        var total= await User.where({landmark_id:"5fb3be57cb07c31f57ab2905"}).count();
                        if(total == 0)
                        {
                            return res.status(200).send(`no data found`);
                        }
                        return res.status(200).send(`total area wise food request ${total}`);
                        
                    })
                });
            }
        })      
        
       

    }catch(err)
    {
        return res.status(400).send("bad request");
    }
}


exports.areaWiseTotalDonation=async(req,res)=>
{
    try{
        Food_listing.find().populate("donor_id")
        .exec((err,data)=>
        {
            if(err)
            {
                return res.status(400).send(err);
            }
            else
            {
                var plates=0;
                data.map((d)=>
                {
                    Donor.findById(d.donor_id).populate("user_id").exec(async (err,user)=>
                    {
                        var total= await User.where({landmark_id:"5fb3be57cb07c31f57ab2905"}).count();
                        if(total == 0)
                        {
                            return res.status(200).send(`no data found`);
                        }
                        else
                        {
                            plates+=d.plates;
                            return res.status(200).send(`total area wise food donation ${total} and total plates ${plates}`);
                        }
                       
                    })
                });
            }
        })      
        
       

    }catch(err)
    {
        return res.status(400).send("bad request");
    }
}


exports.areaWiseRequest=async(req,res)=>
{
    try{
        Food_request.find().populate("receiver_id").exec(async(err,requests)=>
        {
            if(err)
            {
                return res.status(400).send(err);
            }
            else{
                var userIds=requests.map((r)=>{return r.receiver_id.user_id});
                User.find({_id: {$in: userIds},landmark_id:"5fb4f93e50a9a41abf1b5e9f"}, async(err, users)=> {
                    if (err) {
                      
                      return res.status(400).send(err);
                    }
                    else
                    {
                        if(users.length==0)
                        {
                            return res.status(400).send("No data found");
                        }
                       var uids=users.map((u)=>{return u._id.toString()})
                       var result=requests.filter(function(x)
                       {
                         return uids.includes(x.receiver_id.user_id.toString());
                       })
                       res.status(200).send(result);
                    }
                })

                //res.status(200).send(userIds);
            }
        })

    }catch(err)
    {
        return res.status(400).send("bad request");
    }
}   

exports.areaWiseFoodDonation=async(req,res)=>
{
    try{
        Food_listing.find().populate("donor_id").exec(async(err,requests)=>
        {
            if(err)
            {
                return res.status(400).send(err);
            }
            else{
                var userIds=requests.map((r)=>{return r.donor_id.user_id});
                User.find({_id: {$in: userIds},landmark_id:"5fb4f93e50a9a41abf1b5e9f"}, async(err, users)=> {
                    if (err) {
                      
                      return res.status(400).send(err);
                    }
                    else
                    {
                        if(users.length==0)
                        {
                            return res.status(400).send("No data found");
                        }
                       var uids=users.map((u)=>{return u._id.toString()})
                       var result=requests.filter(function(x)
                       {
                         return uids.includes(x.donor_id.user_id.toString());
                       })
                       res.status(200).send(result);
                    }
                })

                //res.status(200).send(userIds);
            }
        })

    }catch(err)
    {
        return res.status(400).send("bad request");
    }
}   