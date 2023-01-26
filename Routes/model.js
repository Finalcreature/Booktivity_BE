const express = require("express");
const router = express.Router();
const { getUserBooks, getOtherCulture } = require("../middlewares/modelReqs");

router.get("/", getUserBooks, getOtherCulture);

module.exports = router;
