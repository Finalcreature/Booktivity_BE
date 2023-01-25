const express = require("express");
const verifyAuth = require("../middlewares/verifyAuth");
const bookController = require("../controllers/bookController");

const router = express.Router();

router.get("/", verifyAuth, bookController.findBooks);

router.get("/:id", verifyAuth, bookController.getBookInfo);

module.exports = router;
