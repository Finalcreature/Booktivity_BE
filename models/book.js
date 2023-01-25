const BookSchema = require("../MongoSchemas/BookSchema");

exports.getBookById = async (bookId) => {
  return await BookSchema.findById(bookId);
};

exports.searchBooks = async (argObj) => {
  delete argObj.userId;
  argObj?.title = new RegExp(argObj.title, "i");
  argObj?.author = new RegExp(argObj.author, "i");
  return await BookSchema.find(argObj);
};
