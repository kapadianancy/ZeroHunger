const mongoose=require("mongoose");
const validator=require("validator");

const foodlistingSchema=mongoose.Schema({
   
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
    receiver_id:
    {
        type:mongoose.Schema.Types.ObjectId,
        //required:true,
        ref:'Receiver'
    },
    event:
    {
        type:String
    },
    
    plates:
    {
        type:Number,
        required:true
    },
    quality_status : {

    },
    is_deleted:
    {
        type:Boolean,
        required:true,
        default:false
    }
},
{
    timestamps: true,
  });

foodlistingSchema.virtual('Food_delivery', {
    ref: 'Food_delivery',
    localField: '_id',
    foreignField: 'food_listing_id'
})
const Food_listing = mongoose.model("Food_listing", foodlistingSchema);

module.exports = Food_listing;