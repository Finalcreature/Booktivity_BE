const express = require("express");
const verifyAuth = require("../middlewares/verifyAuth");
const router = express.Router();
const doesUserExist = require("../middlewares/doesUserExist");
const loginController = require("../controllers/loginController");

router.get("/", verifyAuth);

router.get("/:id", verifyAuth);

router.route(":id/wishlist").get(verifyAuth).put(verifyAuth).delete(verifyAuth);
router
  .route(":id/currently")
  .get(verifyAuth)
  .put(verifyAuth)
  .delete(verifyAuth);
router.route(":id/finished").get(verifyAuth).put(verifyAuth).delete(verifyAuth);

router.post("/login", doesUserExist, loginController.login);
router.post("/signup", createUser);

module.exports = router;
