const mongoose = require("mongoose");
const CharityEventSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },

        // -banner
        // -recieved funds
        title : {
            type:String,
            required:true
        },
        date: {
            type: Date,
            required: true
        },
        time: {
            type: String,
            requird: true
        },
        location: {
            type: String,
            required: true
        },
        purpose : {
            type:String
        },
        description : {
            type:String
        },
        banner:{
            type:String
        },
        receivedFunds : {
            type:Number
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
const CharityEvent = mongoose.model("charityevent", CharityEventSchema);

module.exports = CharityEvent;
