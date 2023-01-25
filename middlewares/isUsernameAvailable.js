const UserSchema = require("../MongoSchemas/UserSchema");

async function isUsernameAvailable(req, res, next) {
  const user = await UserSchema.find({ username: req.body.username });
  if (user) {
    res.send(400).send("Username is already taken");
    return;
  }
  next();
}

module.exports = isUsernameAvailable;
