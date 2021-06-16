const createJWT = require("../createJWT");

// functions/hello.js
exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || "World!";
  const secret = process.env.TOKEN_SECRET;
  return {
    status: 200,
    body: `Hello ${subject}, ${createJWT()}`,
    token: createJWT(),
  };
};
