const mongoose = require("mongoose");
const donorSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        donorCategoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'donorcategory'
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
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
const Donor = mongoose.model("donor", donorSchema);

module.exports = Donor;
