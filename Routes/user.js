const express = require("express");
const verifyAuth = require("../middlewares/verifyAuth");
const router = express.Router();
// const doesUserExist = require("../middlewares/doesUserExist");
const userController = require("../controllers/userController");
const loginController = require("../controllers/loginController");
const signupController = require("../controllers/signupController");
const hashingPassword = require("../middlewares/hashingPassword");
const isUsernameAvailable = require("../middlewares/isUsernameAvailable");
const isPasswordCorrect = require("../middlewares/isPasswordCorrect");
const isEmailNew = require("../middlewares/isEmailNew");

router
  .route("/:id/wishlist")
  .get(verifyAuth, userController.retrieveWishlist)
  .put(verifyAuth, userController.addToWishlist)
  .delete(verifyAuth, userController.deleteInWishlist);

router
  .route("/:id/currently")
  .get(verifyAuth, userController.retrieveCurrentBooks)
  .put(verifyAuth, userController.addToCurrentBooks)
  .delete(verifyAuth, userController.deleteInCurrentBooks);

router
  .route("/:id/finished")
  .get(verifyAuth, userController.retrieveReadBooks)
  .put(verifyAuth, userController.addToReadBooks)
  .delete(verifyAuth, userController.deleteInReadBooks);

router.post("/login", isPasswordCorrect, loginController.login);

router.post(
  "/signup",
  isEmailNew,
  isUsernameAvailable,
  hashingPassword,
  signupController.createUser
);

router.get("/:id", verifyAuth, userController.getUserInfo);

router.get("/", verifyAuth, userController.getTop25Users);

module.exports = router;
