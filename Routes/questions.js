const express = require("express");
const verifyAuth = require("../middlewares/verifyAuth");
const Questions = require("../MongoSchemas/QuestionSchema");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("HERE");
  console.log(req.body);
  const question = new Questions(req.body);
  res.send(question.validateSync().message);
  return;
  //   Questions.validate(req.body)
  //     .then(() => {
  //       Questions.create(req.body);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.send(err.message);
  //     });
});

// router.get("/:id", );

module.exports = router;
