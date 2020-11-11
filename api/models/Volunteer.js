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


volunteerSchema.virtual('Food_delivery', {
    ref: 'Food_delivery',
    localField: '_id',
    foreignField: 'volunteer_id'
})

volunteerSchema.virtual('Landmark_manager', {
    ref: 'Landmark_manager',
    localField: '_id',
    foreignField: 'volunteer_id'
})
const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;