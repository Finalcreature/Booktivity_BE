const express = require("express");
const verifyAuth = require("../middlewares/verifyAuth");
const router = express.Router();
// const doesUserExist = require("../middlewares/doesUserExist");
const userController = require("../controllers/userController");
const loginController = require("../controllers/loginController");
const signupController = require("../controllers/signupController");
const hashingPassword = require("../middlewares/hashingPassword");
const isUsernameAvailable = require("../middlewares/isUsernameAvailable");

router.route(":id/wishlist").get(verifyAuth).put(verifyAuth).delete(verifyAuth);

router
  .route(":id/currently")
  .get(verifyAuth)
  .put(verifyAuth)
  .delete(verifyAuth);

router.route(":id/finished").get(verifyAuth).put(verifyAuth).delete(verifyAuth);

router.post("/login", loginController.login);

router.post(
  "/signup",
  isUsernameAvailable,
  hashingPassword,
  signupController.createUser
);

router.get("/:id", verifyAuth, userController.getUserInfo);

router.get("/", verifyAuth, userController.getTop25Users);

module.exports = router;
