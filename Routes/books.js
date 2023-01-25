const express = require("express");
const verifyAuth = require("../middlewares/verifyAuth");
const bookController = require("../controllers/bookController");
const Book = require("../MongoSchemas/BookSchema");

const router = express.Router();

router.get("/", verifyAuth, bookController.findBooks);

router.get("/:id", verifyAuth, bookController.getBookInfo);

router.post("/create", (req, res) => {
  const newBook = new Book(req.body);
  console.log(newBook);
  newBook.save();
  res.send(newBook);
});

router.put("/addQ", (req, res) => {
  const book = Book.findById(req.body.bookid);
  console.log(book);
});

module.exports = router;
