const { getUser } = require("../models/user");

exports.getUserInfo = async (userId) => {
  try {
    const userInfo = await getUser(req.params.id);
    if (!userInfo) {
      res.status(400).send("User doesn't exist");
      return;
    }
    res.status(200).send(userInfo);
  } catch (err) {
    res.status(500).send(err);
  }
};
