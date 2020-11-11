const mongoose=require("mongoose");
const validator=require("validator");

const volunteerSchema=mongoose.Schema({
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
    DOB:
    {
        type:Date
    },
    gender:
    {
        type:String,

    },
    profession:
    {
        type:String
    },
    skillset:
    {
        type:String
    },
    weekdays:
    {
        type:String
    },
    weekends:
    {
        type:String
    },
    vehicle_mode:
    {
        type:String
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

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;