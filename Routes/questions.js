const express = require("express");
// const verifyAuth = require("../middlewares/verifyAuth");
const Questions = require("../MongoSchemas/QuestionSchema");
const router = express.Router();

router.post("/", (req, res) => {
  const newQuestion = Questions.create(req.body);
  res.send("New Question added");
});

module.exports = router;
