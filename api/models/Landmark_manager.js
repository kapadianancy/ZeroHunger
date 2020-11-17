const mongoose = require("mongoose");

const landmarkmanagerSchema = mongoose.Schema(
    {
        
        volunteer_id:{
            type : mongoose.Schema.Types.ObjectId,
            required:true,
            ref : 'volunteer'
        },
        landmark_id:{
            type : mongoose.Schema.Types.ObjectId,
            required:true,
            ref : 'landmark'
        },
       
        is_deleted: {
            type: Boolean,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);
const LandmarkManager = mongoose.model("Landmark_manager", landmarkmanagerSchema);

module.exports = LandmarkManager;
