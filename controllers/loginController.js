const Users = require("../MongoSchemas/UserSchema");
const createToken = require("../libs/createToken");

exports.login = async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });

    if (user) {
      const token = await createToken(user._id);
      return res.status(201).send({ user, token: token });
    }
    res.status(400).send("User doesn't exist");
  } catch (err) {
    res.status(500).send(err);
  }
};
