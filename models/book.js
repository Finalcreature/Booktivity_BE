const paginate = require("../middlewares/pagination");
const BookSchema = require("../MongoSchemas/BookSchema");

exports.getBookById = async (bookId) => {
  return await BookSchema.findById(bookId);
};

exports.searchBooks = async (argObj) => {
  delete argObj.userId;
  if (typeof argObj === "string") argObj = JSON.parse(argObj); //Postman-Insomnia reqs
  if (argObj.title) argObj.title = new RegExp(argObj.title, "i");
  if (argObj.author) argObj.author = new RegExp(argObj.author, "i");
  const { skip, limit } = paginate(argObj);
  return await BookSchema.find(argObj).skip(skip).limit(limit);
};
