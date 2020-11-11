const mongoose = require("mongoose");
const donorcategorySchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    category: {
      type: String,
      required: true,
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

donorcategorySchema.virtual('donor', {
  ref: 'donor',
  localField: '_id',
  foreignField: 'donorCategoryId'
})

const DonorCategory = mongoose.model("donorcategory", donorcategorySchema);


module.exports = DonorCategory;
