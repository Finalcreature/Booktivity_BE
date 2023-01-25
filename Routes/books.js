const express = require("express");
const verifyAuth = require("../middlewares/verifyAuth");

const router = express.Router();

router.get("/", verifyAuth);

router.get("/:id", verifyAuth);

module.exports = router;
