const mongoose=require("mongoose");
const validator=require("validator");

const foodlistingSchema=mongoose.Schema({
    _id:
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    date:
    {
        type:Date,
        required:true
    },
    time:
    {
        type:String,
        required:true
    },
    donor_id:
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Donor'
    },
    reciever_id:
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Reciever'
    },
    event:
    {
        type:String
    },
    
    plates:
    {
        type:Number,

    },
   
    isDeleted:
    {
        type:Boolean,
        required:true,
        default:false
    }
},
{
    timestamps: true,
  });

const Food_listing = mongoose.model("Food_listing", foodlistingSchema);

module.exports = Food_listing;