const UserSchema = require("../MongoSchemas/UserSchema");

async function isEmailNew(req, res, next) {
  if (req.body.email === "") {
    res.status(400).send("Please enter a valid email address");
  }
  const user = await UserSchema.findOne({ email: req.body.email });
  if (user) {
    res.status(400).send("Email already used");
    return;
  }
  next();
}

module.exports = isEmailNew;
