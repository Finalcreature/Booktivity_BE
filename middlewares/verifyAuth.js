const jwt = require("jsonwebtoken");
const TOKEN_KEY = process.env.TOKEN_KEY;

async function verifyAuth(req, res, next) {
  if (!req.headers.authorization) {
    res.status(401).send("Missing token");
    return;
  }
  const token = req.headers.authorization.replace("Bearer ", "");
  jwt.verify(token, TOKEN_KEY, (err, decoded) => {
    if (err) {
      res.status(401).send("Invalid token");
      return;
    }
    if (decoded) {
      req.body.userId = decoded.userId;
      next();
    }
  });
}

module.exports = verifyAuth;
