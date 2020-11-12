const mongoose=require("mongoose");
const validator=require("validator");

const fooddeliverySchema=mongoose.Schema({
   
   
    food_listing_id:
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Food_listing'
    },
    volunteer_id:
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Volunteer'
    },
    status:
    {
        type:String,
        required:true
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

const Food_delivery = mongoose.model("Food_delivery", fooddeliverySchema);

module.exports = Food_delivery;