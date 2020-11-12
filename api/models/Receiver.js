const mongoose=require("mongoose");
const validator=require("validator");

const receiverSchema=mongoose.Schema({
   
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

receiverSchema.virtual('Donation', {
    ref: 'Donation',
    localField: '_id',
    foreignField: 'receiver_id'
}) 

receiverSchema.virtual('Food_listing', {
    ref: 'Food_listing',
    localField: '_id',
    foreignField: 'receiver_id'
}) 

receiverSchema.virtual('Food_request', {
    ref: 'Food_request',
    localField: '_id',
    foreignField: 'receiver_id'
}) 

const Receiver = mongoose.model("Receiver", receiverSchema);

module.exports = Receiver;