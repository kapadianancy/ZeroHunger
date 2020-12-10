const Food_delivery = require('../models/Food_delivery');
const Food_listing = require('../models/Food_listing');
const Food_request = require('../models/Food_request');
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
            status: "Delivered",
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
        Food_request.find({is_deleted:false})
        .populate("receiver_id")
        .exec((err,r)=>
        {
            if(err)
            {
                return res.status(400).send(err);
            }
            else
            {
                return res.status(200).send(r)
            }
        })


    } catch (err) {
        return res.status(400).send("Bad request");
    }
}

exports.getFoodRequestById = async (req, res) => {
    try {
        const data = await Food_request.findOne({
            _id: req.params.id,
            is_deleted: 0
        }).populate("receiver_id");
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
            is_deleted: 1
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

exports.totalFood = async (req, res) => {
    try {
        var total = await Food_listing.where({ is_deleted: false }).count();

        if (total == 0) {
            return res.status(200).send({total:0});
        }
        return res.status(200).send({total});

    } catch (err) {
        return res.status(400).send("bad request");
    }
}

exports.totalMoney = async (req, res) => {
    try {
        var total = await Donation.where({ is_deleted: false }).count();

        if (total == 0) {
            return res.status(200).send({total:0});
        }
        return res.status(200).send({total});

    } catch (err) {
        return res.status(400).send("bad request");
    }
}

exports.areaWiseTotalRequest = async (req, res) => {
    try {
        var total=0;
        var land_id=req.params.id;
        Food_request.find({is_deleted:false}).populate("receiver_id")
            .exec((err, data) => {
                if (err) {
                    return res.status(400).send(err);
                }
                else {
                    console.log(data);
                    if(data.length==0)
                    {
                        return res.status(200).send({total:0,plates:0});
                    }
                    data.map((d) => {
                            if(d.receiver_id.landmark_id==land_id)
                            {
                                total+=1;
                            }
                        })

                        if (total == 0) {
                            return res.status(200).send({total:0});
                        }
                        return res.status(200).send({total:total});
                    }
                
            })
    } catch (err) {
        return res.status(400).send("bad request");
    }
}


exports.areaWiseTotalDonation = async (req, res) => {
    try {
        var total=0;
              
        var land_id=req.params.id;
        Food_listing.find({is_deleted:false}).populate("donor_id")
            .exec(async(err, data) => {
                if (err) {
                    return res.status(400).send(err);
                }
                else {
                    var plates = 0;
                    if(data.length==0)
                    {
                        return res.status(200).send({total:0,plates:0});
                    }
                    
                    // data.map(async(d) => {
                    //      pro1=Donor.findById(d.donor_id).populate("user_id").exec(async (err, user) => {
                    //         console.log(user.user_id.landmark_id)
                    //         if(user.user_id.landmark_id==land_id)
                    //         {
                    //             total+=1;
                    //             plates+=d.plates
                    //             console.log(total)
                    //         }
                           
                    //     })
                       
                        
                    // });
                    console.log(total)

                    // let result = await Promise.all(
                    //     data.map(async(d) => {
                    //         await Donor.findById(d.donor_id).populate("user_id").exec(async (err, user) => {
                    //            console.log(user.user_id.landmark_id)
                    //            if(user.user_id.landmark_id==land_id)
                    //            {
                    //                total+=1;
                    //                plates+=d.plates
                    //                console.log(total)
                    //            }
                               
                    //            return total;
                    //        }) 
                    //         }) ) 
                   
                    //         console.log(result)
                        if (total == 0) {
                            return res.status(200).send({total:0,plates:0});
                        }
                        else {
                        
                            return res.status(200).send({total:total,plates:plates});
                        }
                    

                }
            })



    } catch (err) {
        return res.status(400).send("bad request");
    }
}


exports.areaWiseRequest=async(req,res)=>
{
    try{
        var land_id=req.params.id;
        Food_request.find().populate("receiver_id").exec(async(err,requests)=>
        {
            if(err)
            {
                return res.status(400).send(err);
            }
            else{
                var userIds=requests.map((r)=>{return r.receiver_id._id});
                Receiver.find({_id: {$in: userIds},landmark_id:land_id}, async(err, users)=> {
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
                         return uids.includes(x.receiver_id._id.toString());
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
                User.find({_id: {$in: userIds},landmark_id:"5fb3be57cb07c31f57ab2905"}, async(err, users)=> {
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

             
    } catch (err) {
        return res.status(400).send("bad request");
    }
}   