const Users = require("../MongoSchemas/UserSchema");
const userModel = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    await Users.validate({ ...req.body }).catch((e) => {
      throw Error(e.message);
    });
    const newUser = new Users({ ...req.body });
    newUser.is_admin = false;
    console.log(newUser);
    const isUserExist = await userModel.createUser(newUser);
    if (isUserExist.code) {
      return res.status(400).send(isUserExist);
    }
    res.send(isUserExist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
