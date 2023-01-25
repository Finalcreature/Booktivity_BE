const {
  getUser,
  getAllUsers,
  getWishlist,
  getCurrentBooks,
  getReadBooks,
  addBook,
  removeBook,
} = require("../models/user");

exports.getUserInfo = async (req, res) => {
  try {
    const userInfo = await getUser({ userId: req.params.id });
    if (!userInfo) {
      res.status(400).send("User doesn't exist");
      return;
    }
    res.status(200).send(userInfo);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getTop25Users = async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    allUsers
      .sort((a, b) => b.reputationPoints - a.reputationPoints)
      .slice(0, 25);
    res.status(200).send(allUsers);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.retrieveWishlist = async (req, res) => {
  try {
    const wishlist = await getWishlist(req.params.id);
    res.status(200).send(wishlist);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.retrieveCurrentBooks = async (req, res) => {
  try {
    const currentBooks = await getCurrentBooks(req.params.id);
    res.status(200).send(currentBooks);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.retrieveReadBooks = async (req, res) => {
  try {
    const readBooks = await getReadBooks(req.params.id);
    res.status(200).send(readBooks);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addToWishlist = async (req, res) => {
  const { id: userId } = req.params;
  const { bookId } = req.body;
  try {
    const feedback = await addBook(userId, "wishlist", bookId);
    res.status(200).send(feedback);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addToCurrentBooks = async (req, res) => {
  const { id: userId } = req.params;
  const { bookId } = req.body;
  try {
    const feedback = await addBook(userId, "currentBooks", bookId);
    res.status(200).send(feedback);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addToReadBooks = async (req, res) => {
  const { id: userId } = req.params;
  const { bookId } = req.body;
  try {
    const feedback = await addBook(userId, "readBooks", bookId);
    res.status(200).send(feedback);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteInWishlist = async (req, res) => {
  const { id: userId } = req.params;
  const { bookId } = req.body;
  try {
    const feedback = await removeBook(userId, "wishlist", bookId);
    res.status(200).send(feedback);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteInCurrentBooks = async (req, res) => {
  const { id: userId } = req.params;
  const { bookId } = req.body;
  try {
    const feedback = await removeBook(userId, "currentBooks", bookId);
    res.status(200).send(feedback);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteInReadBooks = async (req, res) => {
  const { id: userId } = req.params;
  const { bookId } = req.body;
  try {
    const feedback = await removeBook(userId, "readBooks", bookId);
    res.status(200).send(feedback);
  } catch (err) {
    res.status(500).send(err);
  }
};
