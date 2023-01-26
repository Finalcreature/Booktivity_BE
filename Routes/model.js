const express = require("express");
const router = express.Router();
const { getUserBooks, getCultureBook } = require("../middlewares/modelReqs");
const verifyAuth = require("../middlewares/verifyAuth");

router.get("/", verifyAuth, getUserBooks, getCultureBook);

module.exports = router;
