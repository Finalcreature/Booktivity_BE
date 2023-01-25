const UserSchema = require("../MongoSchemas/UserSchema");

async function isEmailNew(req, res, next) {
  const user = await UserSchema.find({ email: req.body.email });
  if (user) {
    res.status(400).send("Email already used");
    return;
  }
  next();
}

module.exports = isEmailNew;
