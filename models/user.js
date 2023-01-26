const UserSchema = require("../MongoSchemas/UserSchema");

exports.getAllUsers = async () => {
  return await UserSchema.find();
};

exports.getUser = async (user) => {
  return await UserSchema.findOne(user);
};

exports.getWishlist = async (id) => {
  console.log(id);
  const user = await UserSchema.findById(id).populate("wishlist");
  console.log(user);
  return user.wishlist;
};

exports.getCurrentBooks = async (id) => {
  const user = await UserSchema.findById(id).populate("currentBooks");
  return user;
};

exports.getReadBooks = async (id) => {
  const user = await UserSchema.findById(id).populate("readBooks");
  return user.readBooks;
};

exports.createUser = async (newUser) => {
  return await newUser.save().catch((err) => err);
};

exports.addBook = async (userId, listType, bookToAdd) => {
  const userToUpdate = await UserSchema.findById(userId);
  userToUpdate[listType].push(bookToAdd);
  userToUpdate.save();
};

exports.removeBook = async (userId, listType, bookToDelete) => {
  const userToUpdate = await UserSchema.findById(userId);
  userToUpdate[listType].pull(bookToDelete);
  userToUpdate.save();
};
