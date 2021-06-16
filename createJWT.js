const jwt = require("jsonwebtoken");
module.exports = () => {
  return jwt.sign(
    {
      msg: "Here is jwt",
    },
    process.env.TOKEN_SECRET
  );
};
