const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  reputationPoints: {
    type: Number,
    default: 0,
  },
  gender: {
    type: String,
    default: "N/A",
  },
  readBooks: [{ type: mongoose.Types.ObjectId, ref: "books" }],
  currentBooks: [{ type: mongoose.Types.ObjectId, ref: "books" }],
  wishlist: [{ type: mongoose.Types.ObjectId, ref: "books" }],
});

module.exports = mongoose.model("user", userSchema);
