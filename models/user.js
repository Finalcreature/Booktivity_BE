const UserSchema = require("../MongoSchemas/UserSchema");

exports.getAllUsers = async () => {
  return await UserSchema.find();
};

exports.getUser = async (user) => {
  return await UserSchema.findOne(user);
};

exports.getWishlist = async (id) => {
  const user = await getUser({ userId: id });
  return user.wishlist;
};
exports.getCurrentBooks = async (id) => {
  const user = await getUser({ userId: id });
  return user.currentBooks;
};
exports.getReadBooks = async (id) => {
  const user = await getUser({ userId: id });
  return user.readBooks;
};

exports.addBook = async (userId, listType, bookToAdd) => {
  const listToUpdate = UserSchema.findById(userId);
  listToUpdate[listType].push(bookToAdd);
  listToUpdate.save();
};

exports.createUser = async (newUser) => {
  return await newUser.save().catch((err) => err);
};

exports.removeBook = async (userId) => {
  //   const userToGet = { _id: req.body.userId };
  //   const userToUpdate = await userModel.getUser(userToGet);
  //   if (userToUpdate.adopted.includes(req.body.petId)) {
  //     userToUpdate.adopted = userToUpdate.adopted.filter(
  //       (pet) => pet !== req.body.petId
  //     );
  //   } else if (userToUpdate.fostered.includes(req.body.petId)) {
  //     userToUpdate.fostered = userToUpdate.fostered.filter(
  //       (pet) => pet !== req.body.petId
  //     );
  //   }
  //   console.log("After remove: ", userToUpdate);
  //   const updatedUser = await User.findOneAndUpdate(userToGet, userToUpdate);
};

// module.exports = [getAllUsers, getUser, getWishlist, addBook, removeBook];
