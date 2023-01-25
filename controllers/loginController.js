const Users = require("../MongoSchemas/UserSchema");
const createToken = require("../assets/createToken");

exports.login = async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    const token = await createToken(user._id);
    return res.status(201).send({ token: token });
  } catch (err) {
    res.status(500).send(err);
  }
};
