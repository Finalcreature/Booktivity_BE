const express = require("express");
const verifyAuth = require("../middlewares/verifyAuth");
const router = express.Router();
const doesUserExist = require("../middlewares/doesUserExist");
const loginController = require("../controllers/loginController");
const signupController = require("../controllers/signupController");
const hashingPassword = require("../middlewares/hashingPassword");

router.route(":id/wishlist").get(verifyAuth).put(verifyAuth).delete(verifyAuth);
router
  .route(":id/currently")
  .get(verifyAuth)
  .put(verifyAuth)
  .delete(verifyAuth);
router.route(":id/finished").get(verifyAuth).put(verifyAuth).delete(verifyAuth);

router.post("/login", loginController.login);
router.post("/signup", hashingPassword, signupController.createUser);

router.get("/:id", verifyAuth);

router.get("/", verifyAuth);

module.exports = router;
