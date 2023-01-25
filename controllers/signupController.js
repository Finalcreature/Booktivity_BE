const Users = require("../MongoSchemas/UserSchema");
const userModel = require("../models/user");

async function createUser(req, res) {
  Users.validate({ ...req.body }).catch((e) => res.send(e.message));
  const newUser = new User({ ...req.body });
  newUser.is_admin = false;
  console.log(newUser);
  const isUserExist = await userModel.createUser(newUser);
  if (isUserExist.code) {
    return res.status(400).send(isUserExist);
  }
  res.send(isUserExist);
}

module.exports = [createUser];
