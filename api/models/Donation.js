const mongoose = require("mongoose");
const donationSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        date: {
            type: Date,
            required: true
        },
        amount: {
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
const Donation = mongoose.model("donation", donationSchema);

module.exports = Donation;
