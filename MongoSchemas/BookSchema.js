const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
  },
  image: {
    type: String,
  },
  rating: {
    type: Number,
  },
  summary: {
    type: String,
  },
  type: {
    type: String,
  },
  isbn: {
    type: String,
  },
  publisher: {
    type: String,
  },

  questions: [{ type: mongoose.Types.ObjectId, ref: "questions" }],
});

module.exports = mongoose.model("books", bookSchema);
