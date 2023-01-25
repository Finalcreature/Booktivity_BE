const UserSchema = require("../MongoSchemas/UserSchema");

async function getAllUsers() {
  return await UserSchema.find();
}

async function getUser(userId) {
  return await UserSchema.findById(userId);
}

async function getWishlist(userId, wishlist) {
  return await UserSchema.find({ userId: { $in: wishlist } });
}
async function getCurrent(userId, currentBooks) {
  return await UserSchema.find({ userId: { $in: currentBooks } });
}
async function getRead(userId, readBooks) {
  return await UserSchema.find({ userId: { $in: readBooks } });
}

async function addBook(userId, listType, bookToAdd) {
  const listToUpdate = UserSchema.findById(userId);
  listToUpdate[listType].push(bookToAdd);
  listToUpdate.save();
}

async function createUser(newUser) {
  return await newUser.save().catch((err) => err);
}

async function removeBook(userId) {
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
}

module.exports = [
  getAllUsers,
  getUser,
  getWishlist,
  addBook,
  removeBook,
  createUser,
];
