const express = require("express");
const verifyAuth = require("../middlewares/verifyAuth");
const bookController = require("../controllers/bookController");
const Book = require("../MongoSchemas/BookSchema");

const router = express.Router();

router.post("/create", (req, res) => {
  const newBook = new Book(req.body);
  console.log(newBook);
  newBook.save();
  res.send(newBook);
});

router.get("/:id/questions", async (req, res) => {
  const book = await Book.findById(req.params.id).populate("questions");
  res.send(book);
});

router.get("/:id", verifyAuth, bookController.getBookInfo);
router.get("/", verifyAuth, bookController.findBooks);

module.exports = router;
