const express = require("express");
const router = express.Router();
const { getUserBooks, getCultureBook } = require("../middlewares/modelReqs");

router.get("/", getUserBooks, getCultureBook);

module.exports = router;
