const mongoose=require("mongoose");
const validator=require("validator");
const UserSchema=mongoose.Schema({
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
    username:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        unique:true,
        required:true,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error("invalid email");
            }
        }
    
    },
    password:
    {
        type:String,
        required:true,
        minlength:6
    },
    phone_number:
    {
        type:Number,
        required:true,
        minlength:10,
        maxlength:10
    },
    address:{
        type:String,
        trim:true
    },
    landmark_id:
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Landmark'
    },
    pincode:
    {
        type:Number,
        required:true
    },
    role_id:
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Role'
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

const User = mongoose.model("User", UserSchema);

module.exports = User;