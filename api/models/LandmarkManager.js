const mongoose = require("mongoose");

const landmarkmanagerSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        volunteerId:{
            type : mongoose.Schema.Types.ObjectId,
            ref : 'volunteer'
        },
        landmarkId:{
            type : mongoose.Schema.Types.ObjectId,
            ref : 'landmark'
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
const LandmarkManager = mongoose.model("landmarkmanager", landmarkmanagerSchema);

module.exports = LandmarkManager;
