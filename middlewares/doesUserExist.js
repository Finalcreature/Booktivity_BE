const { getUser } = require("../models/user");

async function doesUserExist(req, res, next) {
  try {
    const user = await getUser({ email: req.body.email });
    if (!user) {
      res.status(400).send("User doesn't exist");
      return;
    }
    next();
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = doesUserExist;
