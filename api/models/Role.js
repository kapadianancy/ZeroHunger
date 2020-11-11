const mongoose = require("mongoose");
const roleSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: {
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

roleSchema.virtual('User', {
  ref: 'User',
  localField: '_id',
  foreignField: 'role_id'
}) 

const Role = mongoose.model("role", roleSchema);

module.exports = Role;
