const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  name: {
    type: String,
  },
  brandRequirement: {
    type: String,
  },
  competitors: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", UserModel);
