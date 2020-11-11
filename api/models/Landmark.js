const mongoose = require("mongoose");

const landmarkSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        name:{
            type:String,
            required:true
        },
        pincode:{
            type:Number,
            required:true,
            minlength:6,
            maxlength:6

        },
        latitude:{
            type:Number,
            required:true
        },
        longitude:{
            type:Number,
            required:true
        },
        isDeleted: {
            type: Boolean,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

landmarkSchema.virtual('Landmark_manager', {
    ref: 'Landmark_manager',
    localField: '_id',
    foreignField: 'landmark_id'
})

landmarkSchema.virtual('User', {
    ref: 'User',
    localField: '_id',
    foreignField: 'landmark_id'
})


const Landmark = mongoose.model("Landmark", landmarkSchema);

module.exports = Landmark;
