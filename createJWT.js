const jwt = require("jsonwebtoken");
module.exports = (secret_sauce) => {
  return jwt.sign(
    {
      msg: "Here is jwt",
    },
    secret_sauce
  );
};
