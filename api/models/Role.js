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
const Role = mongoose.model("role", roleSchema);

module.exports = Role;
