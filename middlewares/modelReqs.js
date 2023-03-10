const { default: axios } = require("axios");
const Book = require("../MongoSchemas/BookSchema");

async function getUserBooks(req, res, next) {
  const userInfo = await axios.get(
    " http://35.158.92.150:8080/my_user?user_id=11400"
  );
  req.body.userInfo = userInfo.data;
  next();
}

async function getCultureBook(req, res) {
  // console.log(req.body.userInfo[req.query.culture]);
  // console.log(req.body.userInfo.Books_Other_Culture);
  const books = await Book.find({
    isbn: { $in: req.body.userInfo.Books_Other_Culture },
  });

  res.send(books);
}

module.exports = { getUserBooks, getCultureBook };
