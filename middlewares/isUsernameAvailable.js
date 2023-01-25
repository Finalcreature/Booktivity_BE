const UserSchema = require("../MongoSchemas/UserSchema");

async function isUsernameAvailable(req, res, next) {
  const user = await UserSchema.findOne({ username: req.body.username });
  if (user) {
    res.status(400).send("Username is already taken");
    return;
  }
  next();
}

module.exports = isUsernameAvailable;
