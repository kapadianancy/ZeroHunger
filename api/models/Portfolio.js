const mongoose = require("mongoose");

const portfolioSchema = mongoose.Schema(
    {
        
        image:{
            type : String
        },
        description:{
            type : String
        },
       
        is_Deleted: {
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
