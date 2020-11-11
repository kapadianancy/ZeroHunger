const mongoose = require("mongoose");
const foodRequestSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        date: {
            type: Date,
            required: true
        },
        time: {
            type: String,
            requird: true
        },
        plates: {
            type: Number,
            required: true
        },
        receiverId: {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'receiver'
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
const FoodRequest = mongoose.model("foodrequest", foodRequestSchema);

module.exports = FoodRequest;
