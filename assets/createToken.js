const jwt = require("jsonwebtoken");
const TOKEN_KEY = process.env.TOKEN_KEY;

async function createToken(arg) {
  const token = jwt.sign({ userId: arg }, TOKEN_KEY);
  return token;
}

module.exports = createToken;
