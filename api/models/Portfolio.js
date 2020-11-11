const mongoose = require("mongoose");

const portfolioSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        image:{
            type : String
        },
        description:{
            type : String
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
const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;
