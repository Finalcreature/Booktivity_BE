const { getUser, getAllUsers } = require("../models/user");

exports.getUserInfo = async () => {
  try {
    const userInfo = await getUser({userId: req.params.id});
    if (!userInfo) {
      res.status(400).send("User doesn't exist");
      return;
    }
    res.status(200).send(userInfo);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getTop25Users = async () => {
  try {
    const allUsers = await getAllUsers();
    allUsers
      .sort((a, b) => b.reputationPoints - a.reputationPoints)
      .slice(0, 25);
    res.status(200).send(allUsers);
  } catch (err) {
    res.status(500).send(err);
  }
};
