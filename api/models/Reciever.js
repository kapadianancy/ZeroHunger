const mongoose=require("mongoose");
const validator=require("validator");

const recieverSchema=mongoose.Schema({
    _id:
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    user_id:
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    category_id:
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Reciever_category'
    },
    population:
    {
        type:Number
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

const Reciever = mongoose.model("Reciever", recieverSchema);

module.exports = Reciever;