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
            validate(value) {
                if (value.length < 6) {
                    throw new Error('pincode is invalid')
                }
            }

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

landmarkSchema.virtual('landmarkmanager', {
    ref: 'landmarkmanager',
    localField: '_id',
    foreignField: 'landmarkId'
})

const Landmark = mongoose.model("landmark", landmarkSchema);

module.exports = Landmark;
