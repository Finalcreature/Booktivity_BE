const BookSchema = require("../MongoSchemas/BookSchema");

exports.getBookById = async (bookId) => {
  return await BookSchema.findById(bookId);
};

exports.searchBooks = async (argObj) => {
  delete argObj.userId;
  if (typeof argObj === "string") argObj = JSON.parse(argObj); //Postman-Insomnia reqs
  if (argObj.title) argObj.title = new RegExp(argObj.title, "i");
  if (argObj.author) argObj.author = new RegExp(argObj.author, "i");

  return await BookSchema.find(argObj);
};
