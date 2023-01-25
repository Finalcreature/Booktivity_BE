const BookSchema = require("../MongoSchemas/BookSchema");

exports.getBookById = async (bookId) => {
  return await BookSchema.findById(bookId);
};

exports.searchBooks = async (argObj) => {
  delete argObj.userId;
  return await BookSchema.find(argObj);
};
