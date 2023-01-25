const { getBookById, searchBooks } = require("../models/book");

exports.findBooks = async (req, res) => {
  console.log(req.body);
  try {
    const foundBooks = await searchBooks(req.query);
    res.status(200).send(foundBooks);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getBookInfo = async (req, res) => {
  try {
    const bookInfo = await getBookById(req.params.id);
    if (bookInfo) {
      res.status(200).send(bookInfo);
      return;
    }
    res.status(400).send("The book doesn't exist");
  } catch (err) {
    res.status(500).send(err);
  }
};
