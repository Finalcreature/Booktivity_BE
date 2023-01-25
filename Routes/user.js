const express = require("express");
const verifyAuth = require("../middlewares/verifyAuth");
const router = express.Router();

router.get("/", verifyAuth);

router.get("/:id", verifyAuth);

router.route(":id/wishlist").get(verifyAuth).put(verifyAuth).delete(verifyAuth);
router
  .route(":id/currently")
  .get(verifyAuth)
  .put(verifyAuth)
  .delete(verifyAuth);
router.route(":id/finished").get(verifyAuth).put(verifyAuth).delete(verifyAuth);

router.post("/login");
router.post("/signup");

module.exports = router;
