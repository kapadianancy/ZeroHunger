const mongoose=require("mongoose");
const validator=require("validator");

const recieverCatSchema=mongoose.Schema({
    _id:
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    
    name:
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

const Reciever_category = mongoose.model("Reciever_category", recieverCatSchema);

module.exports = Reciever_category;