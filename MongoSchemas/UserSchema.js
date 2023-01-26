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
    unique: true,
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
    enum: ["M", "F", "N/A"],
  },
  Age: {
    type: Number,
  },
  model_id: {
    type: String,
    default: setModelId(8),
  },
  readBooks: [{ type: mongoose.Types.ObjectId, ref: "books" }],
  currentBooks: [{ type: mongoose.Types.ObjectId, ref: "books" }],
  wishlist: [{ type: mongoose.Types.ObjectId, ref: "books" }],
});

function setModelId(n) {
  min = Math.pow(10, n - 1);
  max = min * 10 - 1;
  return Math.floor(min + Math.random() * (max - min + 1));
}

module.exports = mongoose.model("user", userSchema);
