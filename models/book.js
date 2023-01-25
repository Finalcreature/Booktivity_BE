const BookSchema = require("../MongoSchemas/BookSchema");

exports.getBookById = async (bookId) => {
  return await BookSchema.findById(bookId);
};

exports.getAllBooks = async () => {
  return await BookSchema.find();
};
