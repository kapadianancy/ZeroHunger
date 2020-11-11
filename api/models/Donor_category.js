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

donorcategorySchema.virtual('Donor', {
  ref: 'Donor',
  localField: '_id',
  foreignField: 'donor_category_id'
})

const DonorCategory = mongoose.model("Donor_category", donorcategorySchema);


module.exports = DonorCategory;
